# Handoff: implement the Questions tab

For a new session picking this up with no prior context. Read this first, then `QUESTIONS_TAB_PLAN.md`.

## Goal

Add a fourth page, **Questions**, to the CS2103/T study guide: one MCQ or MRQ at a time from a fixed bank, marked automatically, with filters and a browser-local revisit list. Follow `QUESTIONS_TAB_PLAN.md`.

## Where things stand

- Branch: `claude/pensive-euler-5odt2w`. Draft PR: https://github.com/kimjunkuno/cs2103-study-guide/pull/10
- Done: the plan, the draft question bank, and the AB3 file list. **No site code has been written.**
- The repository owner has seen the plan but has **not confirmed the six decisions in plan §10**, and has **not reviewed the questions**.

| File | What it is |
|---|---|
| `QUESTIONS_TAB_PLAN.md` | The design to implement: files, data shape, layout, behaviour, tests, order of work |
| `QUESTION_BANK.md` | 540 draft questions (422 MCQ, 118 MRQ; 84 use AB3). Source of truth for the bank |
| `AB3_FILES.txt` | Every file path in `se-edu/addressbook-level3` at commit `56d1ffbb9cc8df72b97c112fcfdd0cac635652db`, one per line. Use it to check AB3 paths without network access |
| `README.md`, `PLAN.txt` | Project rules and history. Read both before changing anything |

## Before writing code

1. Ask the owner to confirm plan §10 (MRQ marking, automatic saving of wrong answers, option shuffling, AB3 questions in the same deck, topics with no content, quiz mode). If they say to go ahead without answering, use the option marked "planned" in each.
2. Ask whether the questions should be reviewed first. They are unreviewed drafts; building on them is fine, but say so in the PR.
3. Ask whether to keep working on this branch/PR or start a new branch from `main`. The plan suggests three PRs (bank + data, page, polish).

## Project rules that constrain the work

Taken from `README.md`, `PLAN.txt` and `tests/test_site.py`:

- Static site in `site/`; no build step needed to run it, no dependencies, no backend, no accounts, no analytics, no runtime AI.
- No network calls. `tests/test_site.py` fails any `site/*.js` containing `fetch(`, `eval(`, `new Function`, `XMLHttpRequest`, `WebSocket`, `localhost`, or `/Users/`.
- Every page carries the same restrictive meta Content-Security-Policy; scripts and styles are local `./` files only; no inline handlers, no inline scripts or styles.
- Render bank text with `textContent` and DOM nodes, never `innerHTML`.
- Data files are plain scripts assigning a global, e.g. `globalThis.COURSE_FLASHCARDS = {...};` ending in `;\n` (tests parse them by stripping the prefix).
- Logic that tests need lives in a `*-core.js` file exporting through `module.exports` when available and a global otherwise (see `site/flashcards-core.js`).
- Progress stays in `localStorage` under its own key; other features' keys are left alone.
- Deployment: GitHub Pages deploys `site/` from `main` only, after `python3 -m unittest discover -s tests -v`, `node --check` on every `site/*.js`, and `node --test tests/*.test.cjs`. `pages.yml` needs no change.
- Do not edit `site/index.html` content, `CORE_STATEMENTS.json`, `CONTENT_SOURCES.json` or the flashcard data; tests pin them. Adding the nav link to `index.html` is the one allowed edit there.

## Existing code to copy from

The Flashcards page is the closest model; reuse its structure and wording.

- `site/flashcards.html` — page shell, sidebar, filters, More menu, help text.
- `site/flashcards.js` — storage, export/import, `storage` event sync, empty states.
- `site/flashcards-core.js` — `filtered`, `pick`, `restore` (copy the validation style, including the null-prototype object).
- `site/navigation.js` — `CourseNavigation.mount(container, records, onChange)` gives the Textbook/Week filter. It needs each record to have `topicId` (and uses `week`). It works unchanged.
- `site/diagrams.css` / `diagrams.js` — the green/red correct/incorrect colours already used on the site.
- `tests/flashcards.test.cjs` and the `QuestionTests` class in `tests/test_site.py` — test style.

## `QUESTION_BANK.md` format (for the parser)

The file starts with an intro, a summary table and a "Topics without questions" list. Questions follow, under `# Week N` and `## [Wx.y] Topic name` headings. Each question looks like this:

```
### W1.5-07 · MCQ

**Type:** MCQ · **Topic:** [W1.5] Exception Handling · **Subtopic:** Catch or Specify · **Source:** W1.5e · **Basis:** bold

**Question:** A method calls code that may throw …

- A. First option ✅
- B. Second option
- C. Third option
- D. Fourth option

**Answer:** A

**Explanation:** One paragraph, no line breaks.
```

Details the parser must handle:

- Heading: `### <ID> · <MCQ|MRQ>` with an optional trailing ` · AB3`. IDs are `W<week>.<n>-<nn>`, unique, 540 in total.
- Metadata line: fields separated by ` · `. `**Source:**` is one or more Guide topic IDs separated by `, `. `**Basis:**` is `bold`, `body` or `panel`. AB3 questions add ` · **AB3:** ` followed by backticked repo-relative paths separated by `, `. Topic names can contain `&`, `:` and `/`, so split on the bold field labels, not on punctuation.
- Stem: starts after `**Question:** ` and runs to the blank line before the first `- A. `. It may contain inline `` `code` `` and, in about 15 questions, a fenced ``` block on the following lines.
- Options: `- A. ` to `- E. `. MCQ has exactly four with one correct. MRQ has three to five with at least two correct. A correct option ends with ` ✅`; strip it. Option text may contain backticks and punctuation.
- `**Answer:**` repeats the correct letters (`A` or `A, C, D`). Check it against the ✅ marks and fail the build on a mismatch.
- Explanations never mention option letters, so shuffling is safe. Keep it that way (add a test).
- `topicId` for the navigation filter is the first Source ID. The week is the number after `W` in the ID.
- `optional` is true for the two groups whose names end in `: OPTIONAL` (W11.7, W11.8).

The first heading that must be skipped as non-question content is everything before the first `# Week` heading.

## Order of work

1. `tools/build_questions.py`: parse `QUESTION_BANK.md`, validate, write `site/questions-data.js` (shape in plan §3). Add `QuestionBankTests` to `tests/test_site.py` (plan §8), including "data file equals a fresh build" and "AB3 paths are in `AB3_FILES.txt`".
2. `site/questions-core.js` and `tests/questions.test.cjs` (plan §7, §8).
3. `site/questions.html`, `questions.js`, `questions.css` (plan §5, §6).
4. Add the `Questions` link to the `page-links` nav in `index.html`, `flashcards.html`, `diagrams.html`, and allow `questions` in the internal-link regex in `tests/test_site.py` (`test_safe_assets_and_markup`).
5. Update `README.md` and `PLAN.txt`.

## How to check the work

```sh
python3 -m unittest discover -s tests -v
for f in site/*.js; do node --check "$f"; done
node --test tests/*.test.cjs
python3 -m http.server 8000 --directory site
```

Then in a browser (Playwright with Chromium is available in cloud sessions): answer an MCQ right and wrong, answer an MRQ with a missed and a wrong option, skip, reload and confirm the revisit list persists, try each filter, export then import, and check 320px, 390px, 768px and 1024px widths, keyboard-only use and print preview.

## Known gaps

- 11 topic groups have no questions because the snapshot only links to external lessons: W1.7, W2.2, W2.3, W3.1, W3.2, W4.9, W5.7, W5.8, W6.5, W7.5, W7.8. Weeks 12–13 have no topics. The page's empty state should say so.
- MRQs are 22% of the bank.
- Sequence-diagram and activity-diagram notation has few questions; those lessons are interactive pages with no text in the snapshot.
- AB3 facts were only spot-checked against the code. AB3 is not in this repository; clone `se-edu/addressbook-level3` and check out the commit above if a question needs verifying.
- The scripts used to assemble the bank were temporary and are not in the repository. Edit `QUESTION_BANK.md` directly; keep the summary table and the intro counts in step if questions are added or removed (or have the build script regenerate or verify them).
