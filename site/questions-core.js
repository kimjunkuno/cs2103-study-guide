/* Small, dependency-free rules for the Questions page, shared by the UI and tests. */
(function (root) {
  'use strict';
  const LETTERS = 'ABCDE';
  const FLAGS = ['skipped', 'incorrect'];
  // Type: '' (all), 'MCQ' or 'MRQ'. Scope: '' (all), 'theory' or 'ab3'.
  function filtered(questions, options, flags) {
    const {type = '', scope = '', revisitOnly = false} = options || {};
    return questions.filter(question => (!type || question.type === type)
      && (!scope || (scope === 'ab3' ? question.ab3.length > 0 : question.ab3.length === 0))
      && (!revisitOnly || Boolean(flags[question.id])));
  }
  function pick(questions, seen, allowRepeats, previousId, random = Math.random) {
    let choices = allowRepeats ? questions : questions.filter(question => !seen.has(question.id));
    if (allowRepeats && choices.length > 1) choices = choices.filter(question => question.id !== previousId);
    if (!choices.length) return null;
    return choices[Math.min(choices.length - 1, Math.floor(random() * choices.length))];
  }
  // Fisher–Yates on a copy; letters are reassigned after shuffling.
  function shuffle(options, random = Math.random) {
    const copy = options.map(option => ({...option}));
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.min(i, Math.floor(random() * (i + 1)));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.map((option, index) => ({...option, key: LETTERS[index]}));
  }
  // MCQ and MRQ are both all-or-nothing: the selection must equal the key set.
  function grade(question, selectedKeys) {
    const selected = new Set(selectedKeys);
    const missed = question.options.filter(option => option.correct && !selected.has(option.key)).map(option => option.key);
    const wrong = question.options.filter(option => !option.correct && selected.has(option.key)).map(option => option.key);
    return {correct: selected.size > 0 && !missed.length && !wrong.length, missed, wrong};
  }
  // Outcome: 'correct' clears the flag, 'incorrect' saves it, 'skipped' saves it without downgrading 'incorrect'.
  function record(flags, id, outcome) {
    const next = Object.assign(Object.create(null), flags);
    if (outcome === 'correct') delete next[id];
    else if (outcome === 'incorrect') next[id] = 'incorrect';
    else if (outcome === 'skipped') { if (next[id] !== 'incorrect') next[id] = 'skipped'; }
    else throw new Error('Unknown outcome');
    return next;
  }
  function restore(text, knownIds) {
    const data = JSON.parse(text);
    if (!data || data.version !== 1 || !data.flags || typeof data.flags !== 'object' || Array.isArray(data.flags)) {
      throw new Error('Invalid question backup');
    }
    const flags = Object.create(null);
    for (const [id, value] of Object.entries(data.flags)) {
      if (!FLAGS.includes(value)) throw new Error('Invalid revisit flag');
      if (knownIds.has(id)) flags[id] = value;
    }
    return flags;
  }
  // Splits bank text into plain text, `inline code` and ``` fenced blocks. Rendered with textContent only.
  function inline(text) {
    const parts = [];
    let last = 0;
    for (const match of text.matchAll(/`([^`\n]+)`/g)) {
      if (match.index > last) parts.push({type: 'text', text: text.slice(last, match.index)});
      parts.push({type: 'code', text: match[1]});
      last = match.index + match[0].length;
    }
    if (last < text.length) parts.push({type: 'text', text: text.slice(last)});
    return parts;
  }
  function tokens(text) {
    const parts = [];
    let last = 0;
    for (const match of text.matchAll(/(?:^|\n)```[^\n]*\n([\s\S]*?)\n?```(?=\n|$)/g)) {
      if (match.index > last) parts.push(...inline(text.slice(last, match.index)));
      parts.push({type: 'pre', text: match[1]});
      last = match.index + match[0].length;
    }
    if (last < text.length) parts.push(...inline(text.slice(last).replace(/^\n/, '')));
    return parts;
  }
  const api = Object.freeze({filtered, pick, shuffle, grade, record, restore, tokens});
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.QuestionCore = api;
})(globalThis);
