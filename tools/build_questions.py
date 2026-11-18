#!/usr/bin/env python3
"""Build site/questions-data.js from QUESTION_BANK.md.

QUESTION_BANK.md is the reviewed source of truth for the Questions tab. This
script parses it, validates every question and writes the static data file the
page loads. It refuses to write anything if a single question is malformed.

    python3 tools/build_questions.py          # write site/questions-data.js
    python3 tools/build_questions.py --check  # fail if the data file is stale
"""
import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BANK = ROOT / 'QUESTION_BANK.md'
SOURCES = ROOT / 'CONTENT_SOURCES.json'
AB3_FILES = ROOT / 'AB3_FILES.txt'
OUTPUT = ROOT / 'site' / 'questions-data.js'
PREFIX = 'globalThis.COURSE_QUESTIONS = '
SNAPSHOT = '2026-11-11'
AB3_COMMIT = '56d1ffb'

ID_RE = re.compile(r'^W(\d+)\.(\d+)-(\d{2})$')
SOURCE_ID_RE = re.compile(r'^W\d+\.\d+[a-z]+$')
HEADING_RE = re.compile(r'^### (\S+) · (MCQ|MRQ)( · AB3)?$')
GROUP_RE = re.compile(r'^## (\[W(\d+)\.(\d+)\] .+)$')
WEEK_RE = re.compile(r'^# Week (\d+)$')
OPTION_RE = re.compile(r'^- ([A-E])\. (.+)$')
META_RE = re.compile(
    r'^\*\*Type:\*\* (?P<type>MCQ|MRQ)'
    r' · \*\*Topic:\*\* (?P<topic>.+?)'
    r' · \*\*Subtopic:\*\* (?P<subtopic>.+?)'
    r' · \*\*Source:\*\* (?P<source>.+?)'
    r' · \*\*Basis:\*\* (?P<basis>bold|body|panel)'
    r'(?: · \*\*AB3:\*\* (?P<ab3>.+))?$')
CORRECT_MARK = ' ✅'
# Wording that would tie an explanation to a letter, which shuffling breaks.
LETTER_RE = re.compile(
    r'\b(?i:options?|choices?|answers?|statements?)\s+[A-E]\b'
    r'|\([A-E]\)'
    r'|\b[A-E]\s*(?:,|and|or|&)\s*[A-E]\b(?!\w)'
    r'|\b[A-E]\s+(?:is|are)\s+(?:correct|wrong|incorrect|true|false)\b')


class BankError(ValueError):
    """Raised when QUESTION_BANK.md does not follow the expected format."""


def mentions_option_letter(text):
    return bool(LETTER_RE.search(text))


def _fail(errors, line_no, message):
    errors.append(f'QUESTION_BANK.md:{line_no}: {message}')


def parse(text):
    """Return (questions, stub_groups) parsed from the bank text.

    Raises BankError listing every problem found.
    """
    lines = text.split('\n')
    errors = []
    try:
        start = next(i for i, line in enumerate(lines) if WEEK_RE.match(line))
    except StopIteration:
        raise BankError('QUESTION_BANK.md has no "# Week" heading')
    stub_groups = _stub_groups(lines[:start])
    week = None
    group = None
    blocks = []
    for index in range(start, len(lines)):
        line = lines[index]
        if (match := WEEK_RE.match(line)):
            week = int(match.group(1)); group = None
        elif (match := GROUP_RE.match(line)):
            group = (match.group(1), int(match.group(2)), match.group(3))
            if week != group[1]:
                _fail(errors, index + 1, f'group {group[0]} is under Week {week}')
        elif line.startswith('### '):
            blocks.append([index, week, group])
        elif line.startswith('#'):
            _fail(errors, index + 1, f'unexpected heading {line!r}')
    headings = [i for i in range(start, len(lines)) if lines[i].startswith('#')] + [len(lines)]
    questions = []
    for index, block_week, block_group in blocks:
        end = next(i for i in headings if i > index)
        body = lines[index:end]
        while body and body[-1].strip() in {'', '---'}:
            body.pop()
        question = _parse_question(body, index + 1, block_week, block_group, errors)
        if question:
            questions.append(question)
    counts = Counter(q['id'] for q in questions)
    for qid, count in counts.items():
        if count > 1:
            errors.append(f'duplicate question ID {qid}')
    if errors:
        raise BankError('\n'.join(errors))
    return questions, stub_groups


def _stub_groups(intro):
    try:
        start = intro.index('## Topics without questions')
    except ValueError:
        raise BankError('QUESTION_BANK.md has no "## Topics without questions" list')
    groups = []
    for line in intro[start + 1:]:
        if line.startswith('#') or line == '---':
            break
        if line.startswith('- ['):
            groups.append(line[2:])
    return groups


def _parse_question(body, line_no, week, group, errors):
    start_errors = len(errors)
    heading = HEADING_RE.match(body[0])
    if not heading:
        _fail(errors, line_no, f'bad question heading {body[0]!r}')
        return None
    qid, qtype, ab3_tag = heading.group(1), heading.group(2), bool(heading.group(3))
    id_match = ID_RE.match(qid)
    if not id_match:
        _fail(errors, line_no, f'bad question ID {qid!r}')
        return None
    if group is None:
        _fail(errors, line_no, f'{qid} is not under a topic group')
        return None
    group_name, group_week, group_number = group
    if int(id_match.group(1)) != group_week or id_match.group(2) != group_number:
        _fail(errors, line_no, f'{qid} is under {group_name}')

    def take(label):
        prefix = f'**{label}:** '
        found = [i for i, line in enumerate(body) if line.startswith(prefix)]
        if len(found) != 1:
            _fail(errors, line_no, f'{qid} needs exactly one **{label}:** line')
            return None, None
        return found[0], body[found[0]][len(prefix):].strip()

    meta_at = next((i for i, line in enumerate(body) if line.startswith('**Type:** ')), None)
    meta = META_RE.match(body[meta_at]) if meta_at is not None else None
    if not meta:
        _fail(errors, line_no, f'{qid} has a malformed metadata line')
        return None
    if meta['type'] != qtype:
        _fail(errors, line_no, f'{qid} heading says {qtype} but Type says {meta["type"]}')
    if meta['topic'] != group_name:
        _fail(errors, line_no, f'{qid} Topic {meta["topic"]!r} differs from its group {group_name!r}')
    sources = meta['source'].split(', ')
    for source in sources:
        if not SOURCE_ID_RE.match(source):
            _fail(errors, line_no, f'{qid} has a bad Source ID {source!r}')
    if len(set(sources)) != len(sources):
        _fail(errors, line_no, f'{qid} repeats a Source ID')
    ab3 = []
    if meta['ab3']:
        for part in meta['ab3'].split(', '):
            if not (part.startswith('`') and part.endswith('`') and len(part) > 2 and '`' not in part[1:-1]):
                _fail(errors, line_no, f'{qid} has a malformed AB3 path {part!r}')
            ab3.append(part.strip('`'))
    if ab3_tag != bool(ab3):
        _fail(errors, line_no, f'{qid} AB3 heading tag and AB3 field disagree')

    question_at, first_stem = take('Question')
    answer_at, answer = take('Answer')
    explanation_at, explanation = take('Explanation')
    if None in (question_at, answer_at, explanation_at):
        return None
    if not meta_at < question_at < answer_at < explanation_at:
        _fail(errors, line_no, f'{qid} fields are out of order')
        return None
    option_lines = [i for i in range(question_at + 1, answer_at) if OPTION_RE.match(body[i])]
    if not option_lines:
        _fail(errors, line_no, f'{qid} has no options')
        return None
    first_option = option_lines[0]
    stem_lines = [first_stem] + body[question_at + 1:first_option]
    while stem_lines and not stem_lines[-1].strip():
        stem_lines.pop()
    stem = '\n'.join(stem_lines)
    if stem.count('```') % 2:
        _fail(errors, line_no, f'{qid} has an unclosed code fence')
    if not first_stem:
        _fail(errors, line_no, f'{qid} has an empty question')
    expected_option_lines = list(range(first_option, first_option + len(option_lines)))
    if option_lines != expected_option_lines or any(body[i].strip() for i in range(option_lines[-1] + 1, answer_at)):
        _fail(errors, line_no, f'{qid} options must be one contiguous list before the answer')
    options = []
    for offset, i in enumerate(option_lines):
        key, option_text = OPTION_RE.match(body[i]).groups()
        if key != 'ABCDE'[offset]:
            _fail(errors, line_no, f'{qid} option {key} is out of sequence')
        correct = option_text.endswith(CORRECT_MARK)
        if correct:
            option_text = option_text[:-len(CORRECT_MARK)]
        if '✅' in option_text or not option_text.strip():
            _fail(errors, line_no, f'{qid} option {key} is malformed')
        options.append({'key': key, 'text': option_text.strip(), 'correct': correct})
    texts = [option['text'].casefold() for option in options]
    if len(set(texts)) != len(texts):
        _fail(errors, line_no, f'{qid} repeats an option')
    keys = [option['key'] for option in options if option['correct']]
    if qtype == 'MCQ' and (len(options) != 4 or len(keys) != 1):
        _fail(errors, line_no, f'{qid} MCQ needs 4 options and 1 correct (has {len(options)}, {len(keys)})')
    if qtype == 'MRQ' and not (3 <= len(options) <= 5 and len(keys) >= 2):
        _fail(errors, line_no, f'{qid} MRQ needs 3-5 options and at least 2 correct (has {len(options)}, {len(keys)})')
    if answer != ', '.join(keys):
        _fail(errors, line_no, f'{qid} Answer {answer!r} does not match the ✅ marks {", ".join(keys)!r}')
    if any(line.strip() for line in body[answer_at + 1:explanation_at]) or any(line.strip() for line in body[explanation_at + 1:]):
        _fail(errors, line_no, f'{qid} has stray text around the answer or explanation')
    if not explanation:
        _fail(errors, line_no, f'{qid} has an empty explanation')
    elif mentions_option_letter(explanation):
        _fail(errors, line_no, f'{qid} explanation refers to an option letter')
    if len(errors) != start_errors:
        return None
    return {
        'id': qid,
        'type': qtype,
        'week': int(id_match.group(1)),
        'topic': group_name,
        'topicId': sources[0],
        'sources': sources,
        'subtopic': meta['subtopic'],
        'basis': meta['basis'],
        'ab3': ab3,
        'stem': stem,
        'options': options,
        'explanation': explanation,
        'optional': group_name.endswith(': OPTIONAL'),
    }


def _summary_errors(text, questions):
    """Check the intro counts and the summary table against the parsed bank."""
    errors = []
    total = len(questions)
    by_type = Counter(q['type'] for q in questions)
    ab3 = sum(bool(q['ab3']) for q in questions)
    basis = Counter(q['basis'] for q in questions)
    expected = [
        f'**{total} questions**: {by_type["MCQ"]} MCQ (four options, one correct) and {by_type["MRQ"]} MRQ',
        f'**{ab3} questions apply a topic to the AddressBook-Level3 (AB3) code base**',
        f'Of the {total} questions, {basis["bold"]} rest on bold text, {basis["body"]} on body text and {basis["panel"]} on panels.',
    ]
    for phrase in expected:
        if phrase not in text:
            errors.append(f'intro count is out of date; expected: {phrase}')
    rows = {}
    for line in text.split('\n'):
        match = re.match(r'^\| (\d+) \| (\[W.+?) \| (.+?) \| (.+?) \| (.+?) \| (.+?) \|$', line)
        if match:
            rows[match.group(2)] = match.groups()[2:]
    groups = {}
    for q in questions:
        row = groups.setdefault(q['topic'], Counter())
        row[q['type']] += 1; row['AB3'] += bool(q['ab3'])
    for name, row in groups.items():
        want = (str(row['MCQ']), str(row['MRQ']), str(row['AB3']), str(row['MCQ'] + row['MRQ']))
        if rows.get(name) != want:
            errors.append(f'summary row for {name} should read {" | ".join(want)}, found {rows.get(name)}')
    for name, row in rows.items():
        if name not in groups and row != ('–', '–', '–', 'none'):
            errors.append(f'summary row for {name} lists questions that are not in the bank')
    total_row = f'| | **Total** | **{by_type["MCQ"]}** | **{by_type["MRQ"]}** | **{ab3}** | **{total}** |'
    if total_row not in text:
        errors.append(f'summary total row should read {total_row}')
    return errors


def build(text=None):
    """Return the questions-data.js text for the bank, validating everything."""
    text = BANK.read_text(encoding='utf-8') if text is None else text
    questions, stub_groups = parse(text)
    errors = _summary_errors(text, questions)
    catalog = {topic['id']: topic for topic in json.loads(SOURCES.read_text(encoding='utf-8'))['topics']}
    ab3_files = set(AB3_FILES.read_text(encoding='utf-8').split('\n')) - {''}
    groups = {topic['group'] for topic in catalog.values()}
    for q in questions:
        for source in q['sources']:
            topic = catalog.get(source)
            if not topic:
                errors.append(f'{q["id"]} Source {source} is not in CONTENT_SOURCES.json')
            elif topic['group'] != q['topic'] or topic['week'] != q['week']:
                errors.append(f'{q["id"]} Source {source} belongs to {topic["group"]}, not {q["topic"]}')
        for path in q['ab3']:
            if path not in ab3_files:
                errors.append(f'{q["id"]} AB3 path {path} is not in AB3_FILES.txt')
    covered = {q['topic'] for q in questions}
    for group in stub_groups:
        if group not in groups:
            errors.append(f'listed stub group {group} is not in CONTENT_SOURCES.json')
        if group in covered:
            errors.append(f'listed stub group {group} has questions')
    for group in groups - covered - set(stub_groups):
        errors.append(f'topic group {group} has no questions and is not listed as without questions')
    if errors:
        raise BankError('\n'.join(errors))
    # Topic-level OPTIONAL markers also occur inside otherwise required groups.
    for q in questions:
        q['optional'] = all(catalog[source].get('optional', False) for source in q['sources'])
    used = sorted({source for q in questions for source in q['sources']}, key=_id_order)
    data = {
        'version': 1,
        'snapshot': SNAPSHOT,
        'ab3Commit': AB3_COMMIT,
        'emptyGroups': stub_groups,
        'sourceLinks': {source: {'title': catalog[source]['title'], 'url': catalog[source]['source']} for source in used},
        'questions': questions,
    }
    return PREFIX + json.dumps(data, indent=2, ensure_ascii=False) + ';\n'


def _id_order(source):
    week, rest = source[1:].split('.', 1)
    number = re.match(r'\d+', rest).group(0)
    return int(week), int(number), rest[len(number):]


def main(argv):
    try:
        output = build()
    except BankError as error:
        print(error, file=sys.stderr)
        print('Not written: fix QUESTION_BANK.md first.', file=sys.stderr)
        return 1
    if '--check' in argv:
        current = OUTPUT.read_text(encoding='utf-8') if OUTPUT.exists() else ''
        if current != output:
            print('site/questions-data.js is out of date; run python3 tools/build_questions.py', file=sys.stderr)
            return 1
        print('site/questions-data.js is up to date.')
        return 0
    OUTPUT.write_text(output, encoding='utf-8')
    count = output.count('"id": "W')
    print(f'Wrote {OUTPUT.relative_to(ROOT)} with {count} questions.')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
