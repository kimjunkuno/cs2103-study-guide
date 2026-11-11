/* Small, dependency-free rules shared by the UI and tests. */
(function (root) {
  'use strict';
  function filtered(cards, week, topic, revisitOnly, flags) {
    return cards.filter(card => (!week || card.week === Number(week))
      && (!topic || card.topic === topic) && (!revisitOnly || Boolean(flags[card.id])));
  }
  function pick(cards, seen, allowRepeats, previousId, random = Math.random) {
    let choices = allowRepeats ? cards : cards.filter(card => !seen.has(card.id));
    if (allowRepeats && choices.length > 1) choices = choices.filter(card => card.id !== previousId);
    if (!choices.length) return null;
    return choices[Math.min(choices.length - 1, Math.floor(random() * choices.length))];
  }
  function restore(text, knownIds) {
    const data = JSON.parse(text);
    if (!data || data.version !== 1 || !data.flags || typeof data.flags !== 'object' || Array.isArray(data.flags)) {
      throw new Error('Invalid flashcard backup');
    }
    const flags = Object.create(null);
    for (const [id, value] of Object.entries(data.flags)) {
      if (!['skipped', 'incorrect'].includes(value)) throw new Error('Invalid revisit flag');
      if (knownIds.has(id)) flags[id] = value;
    }
    return flags;
  }
  const api = Object.freeze({filtered, pick, restore});
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.FlashcardCore = api;
})(globalThis);
