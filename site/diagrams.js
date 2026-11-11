(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const cards = DIAGRAM_QUESTIONS.cards;
  const known = new Set(cards.map(item => item.id)), storageName = 'cs2103-course-diagrams-v1';
  const families = {class: 'Class', object: 'Object / value tables', conceptual: 'Conceptual class', sequence: 'Sequence', activity: 'Activity', architecture: 'Architecture'};
  let flags = Object.create(null), seen = new Set(), current = null, revealed = false, pointerStart = null;
  try {
    const stored = localStorage.getItem(storageName);
    if (stored) flags = FlashcardCore.restore(stored, known);
  } catch (error) { $('dg-message').textContent = 'Saved practice could not be read. You can still practise.'; }
  function persist() {
    try { localStorage.setItem(storageName, JSON.stringify({version: 1, flags})); }
    catch (error) { $('dg-message').textContent = 'Storage unavailable. Export a backup to keep progress.'; }
  }
  function pool() {
    return cards.filter(item => (!$('dg-revisit').checked || flags[item.id])
      && (!$('dg-family').value || item.family === $('dg-family').value));
  }
  function stats() {
    const matching = pool(), remaining = matching.filter(item => !seen.has(item.id)).length;
    $('dg-count').textContent = matching.length + (matching.length === 1 ? ' card · ' : ' cards · ') + Object.keys(flags).length + ' saved · '
      + ($('dg-repeats').checked ? 'Repeats on' : remaining + ' left');
  }
  function flip(show) {
    revealed = show;
    $('dg-answer').hidden = !show;
    $('dg-source-wrap').hidden = !show;
    if (!show) $('dg-source-wrap').open = false;
    $('dg-card').setAttribute('aria-expanded', String(show));
    $('dg-card').setAttribute('aria-label', show ? 'Hide diagram answer' : 'Reveal diagram answer');
    $('dg-hint').textContent = show ? 'Tap to hide' : 'Tap to reveal';
    for (const id of ['dg-correct', 'dg-incorrect', 'dg-next']) $(id).hidden = !show;
    $('dg-skip').hidden = show;
  }
  function next() {
    current = FlashcardCore.pick(pool(), seen, $('dg-repeats').checked, current && current.id);
    $('dg-exercise').hidden = !current;
    $('dg-empty').hidden = Boolean(current);
    $('dg-repeat').disabled = !current;
    if (current) {
      seen.add(current.id);
      $('dg-type').textContent = families[current.family];
      $('dg-context').textContent = current.context;
      $('dg-answer').textContent = current.answer;
      $('dg-answer').classList.toggle('is-correct', current.isCorrect);
      $('dg-answer').classList.toggle('is-incorrect', !current.isCorrect);
      $('dg-canvas').replaceChildren(DiagramRenderer.render(current.image).svg);
      $('dg-correction').hidden = !current.reference;
      $('dg-reference-caption').textContent = current.reference?.caption || 'Course reference example';
      // Render the reference only when its disclosure is opened.
      $('dg-fixed-canvas').replaceChildren();
      $('dg-rule').textContent = current.rule;
      $('dg-source').href = current.source;
      $('dg-book-source').href = current.bookSource;
      $('dg-image-source').href = current.image.source;
      $('dg-guide').href = './index.html#' + encodeURIComponent(current.topicId);
      flip(false);
    } else {
      $('dg-empty').textContent = pool().length ? 'Set complete. Restart or allow repeats.'
        : 'No cards match. Change diagram type or switch off Revisit only.';
    }
    stats();
  }
  function restart() { seen = new Set(); next(); }
  function grade(correct) {
    if (!current || !revealed) return;
    if (correct) delete flags[current.id]; else flags[current.id] = 'incorrect';
    $('dg-message').textContent = correct ? 'Removed from saved.' : 'Saved for later.';
    persist(); next();
    if (current) $('dg-card').focus({preventScroll: true});
  }
  $('dg-family').addEventListener('change', restart);
  $('dg-revisit').addEventListener('change', restart);
  $('dg-repeats').addEventListener('change', () => { if (!current) next(); else stats(); });
  $('dg-card').addEventListener('pointerdown', event => { pointerStart = {x: event.clientX, y: event.clientY}; });
  $('dg-card').addEventListener('pointercancel', () => { pointerStart = null; });
  $('dg-card').addEventListener('click', event => {
    // Swiping a wide diagram should scroll it without revealing the answer.
    if (event.detail && pointerStart && Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) > 10) return;
    if (current) flip(!revealed);
  });
  $('dg-card').addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); if (current) flip(!revealed); }
  });
  $('dg-correct').addEventListener('click', () => grade(true));
  $('dg-incorrect').addEventListener('click', () => grade(false));
  $('dg-next').addEventListener('click', () => { next(); if (current) $('dg-card').focus({preventScroll: true}); });
  $('dg-restart').addEventListener('click', restart);
  $('dg-repeat').addEventListener('click', () => { if (current) { flip(false); $('dg-card').focus(); } });
  $('dg-skip').addEventListener('click', () => {
    if (!current) return;
    if (!flags[current.id]) flags[current.id] = 'skipped';
    $('dg-message').textContent = 'Skipped and saved.';
    persist(); next();
    if (current) $('dg-card').focus({preventScroll: true});
  });
  $('dg-source-wrap').addEventListener('toggle', () => {
    if (current && revealed && $('dg-source-wrap').open && current.reference) {
      $('dg-fixed-canvas').replaceChildren(DiagramRenderer.render(current.reference).svg);
    }
  });
  $('dg-enlarge').addEventListener('click', () => {
    if (!current) return;
    $('dg-dialog-context').textContent = current.context;
    $('dg-dialog-canvas').replaceChildren(DiagramRenderer.render(current.image).svg);
    $('dg-dialog').showModal();
  });
  $('dg-close').addEventListener('click', () => $('dg-dialog').close());
  $('dg-export').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify({version: 1, flags}, null, 2)], {type: 'application/json'}));
    const link = document.createElement('a'); link.href = url; link.download = 'cs2103-diagram-revisit.json'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $('dg-import').addEventListener('click', () => $('dg-file').click());
  $('dg-file').addEventListener('change', async event => {
    try {
      const file = event.target.files[0]; if (!file || file.size > 2 * 1024 * 1024) throw new Error();
      const replacement = FlashcardCore.restore(await file.text(), known);
      flags = replacement; persist(); restart(); $('dg-message').textContent = 'Revisit list imported.';
    } catch (error) { $('dg-message').textContent = 'Invalid backup. Your list is unchanged.'; }
    finally { $('dg-file').value = ''; }
  });
  window.addEventListener('storage', event => {
    if (event.key !== storageName) return;
    try { flags = event.newValue ? FlashcardCore.restore(event.newValue, known) : Object.create(null); restart(); }
    catch (error) { $('dg-message').textContent = 'An invalid storage update was ignored.'; }
  });
  next();
})();
