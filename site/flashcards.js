(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const cards = globalThis.COURSE_FLASHCARDS.cards;
  const rules = globalThis.FlashcardCore;
  const knownIds = new Set(cards.map(card => card.id));
  const storageKey = 'cs2103-flashcards-v1';
  let flags = Object.create(null);
  let seen = new Set();
  let current = null;
  let revealed = false;

  function tell(message) { $('fc-message').textContent = message; }
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) flags = rules.restore(stored, knownIds);
  } catch (error) {
    tell('Saved flashcard progress could not be read. Practice still works; use a backup if needed.');
  }
  function persist() {
    try { localStorage.setItem(storageKey, JSON.stringify({version: 1, flags})); }
    catch (error) { tell('This browser cannot save progress. Export a backup to keep your revisit list.'); }
  }
  const navigation = CourseNavigation.mount($('fc-navigation'), cards, restart);
  function pool() {
    return cards.filter(card => navigation.matches(card) && (!$('fc-revisit').checked || flags[card.id]));
  }
  function stats() {
    const matching = pool();
    const remaining = matching.filter(card => !seen.has(card.id)).length;
    $('fc-pool').textContent = matching.length + (matching.length === 1 ? ' question matches · ' : ' questions match · ')
      + ($('fc-repeats').checked ? 'Repeats allowed' : remaining + ' unseen this session');
    const skipped = Object.values(flags).filter(value => value === 'skipped').length;
    const incorrect = Object.values(flags).filter(value => value === 'incorrect').length;
    $('fc-saved').textContent = skipped + ' skipped · ' + incorrect + ' incorrect saved for later';
  }
  function flip(show) {
    revealed = show;
    $('fc-answer').hidden = !show;
    $('fc-passage-wrap').hidden = !show;
    if (!show) $('fc-passage-wrap').open = false;
    $('fc-face-label').textContent = show ? 'ANSWER' : 'FILL IN THE BLANK';
    $('fc-hint').textContent = show ? 'Click the card to hide the answer' : 'Click the card to reveal the answer';
    $('fc-card').setAttribute('aria-expanded', String(show));
    $('fc-card').setAttribute('aria-label', show ? 'Hide flashcard answer' : 'Reveal flashcard answer');
    $('fc-correct').disabled = !show;
    $('fc-incorrect').disabled = !show;
  }
  function next() {
    const previousId = current && current.id;
    current = rules.pick(pool(), seen, $('fc-repeats').checked, previousId);
    const present = Boolean(current);
    $('fc-study').hidden = !present;
    $('fc-empty').hidden = present;
    if (!present) {
      $('fc-empty-title').textContent = pool().length ? 'You’ve seen every card in this selection.' : 'No questions in this selection.';
      $('fc-empty-text').textContent = pool().length
        ? 'Restart the session or allow repeats to keep practising. Your revisit list is kept.'
        : $('fc-revisit').checked ? 'No saved cards match these filters. Try all topics or switch off Revisit only.'
          : 'Try a different week or topic. Weeks 12–13 have no assigned topics; external lessons are not copied into this deck.';
    } else {
      seen.add(current.id);
      $('fc-context').textContent = current.topicId + ' · ' + current.topic;
      $('fc-question').textContent = current.prompt;
      $('fc-answer').textContent = current.answer;
      $('fc-passage').textContent = current.passage;
      $('fc-source').href = current.source;
      $('fc-guide').href = './index.html#' + encodeURIComponent(current.topicId);
      $('fc-card-status').textContent = flags[current.id] === 'incorrect' ? 'Saved: incorrect'
        : flags[current.id] === 'skipped' ? 'Saved: skipped' : current.optional ? 'Optional course topic' : 'Source-backed study question';
      flip(false);
    }
    stats();
  }
  function restart() { seen = new Set(); next(); }
  $('fc-revisit').addEventListener('change', restart);
  $('fc-repeats').addEventListener('change', () => { if (!current) next(); else stats(); });
  $('fc-card').addEventListener('click', () => { if (current) flip(!revealed); });
  $('fc-next').addEventListener('click', next);
  $('fc-restart').addEventListener('click', restart);
  $('fc-repeat').addEventListener('click', () => { flip(false); tell('Same question, answer hidden.'); $('fc-card').focus(); });
  $('fc-skip').addEventListener('click', () => {
    if (!current) return;
    // Skipping an already incorrect card must not erase its incorrect status.
    if (flags[current.id] !== 'incorrect') flags[current.id] = 'skipped';
    tell('Saved for later. Use Revisit only to return to skipped and incorrect cards.');
    persist(); next();
  });
  $('fc-incorrect').addEventListener('click', () => {
    if (!current || !revealed) return;
    flags[current.id] = 'incorrect'; tell('Marked incorrect and saved for later.'); persist(); next();
  });
  $('fc-correct').addEventListener('click', () => {
    if (!current || !revealed) return;
    delete flags[current.id]; tell('Marked correct and removed from your revisit list.'); persist(); next();
  });
  $('fc-export').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({version: 1, flags}, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob), link = document.createElement('a');
    link.href = url; link.download = 'cs2103-flashcard-revisit.json'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $('fc-import').addEventListener('click', () => $('fc-file').click());
  $('fc-file').addEventListener('change', async event => {
    try {
      const file = event.target.files[0];
      if (!file || file.size > 2 * 1024 * 1024) throw new Error('File too large');
      const replacement = rules.restore(await file.text(), knownIds);
      flags = replacement; persist(); restart(); tell('Revisit list replaced with the validated backup.');
    } catch (error) { tell('Could not import that backup. Your existing list is unchanged. Use a valid flashcard backup up to 2 MB.'); }
    finally { $('fc-file').value = ''; }
  });
  $('fc-reset').addEventListener('click', () => {
    if (!window.confirm('Clear the saved skipped and incorrect flashcards?')) return;
    flags = Object.create(null); persist(); restart(); tell('Revisit list cleared. Guide progress is unchanged.');
  });
  // Keep multiple open tabs in sync without rewriting another tab’s data.
  window.addEventListener('storage', event => {
    if (event.key !== storageKey) return;
    try { flags = event.newValue ? rules.restore(event.newValue, knownIds) : Object.create(null); restart(); tell('Revisit list updated from another tab.'); }
    catch (error) { tell('An invalid progress update was ignored.'); }
  });
  next();
})();
