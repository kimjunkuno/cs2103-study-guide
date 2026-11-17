(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const bank = globalThis.COURSE_QUESTIONS;
  const questions = bank.questions;
  const rules = globalThis.QuestionCore;
  const knownIds = new Set(questions.map(question => question.id));
  const storageKey = 'cs2103-questions-v1';
  const ab3Base = 'https://github.com/se-edu/addressbook-level3/blob/' + bank.ab3Commit + '/';
  const basisLabels = {bold: 'Core theory', body: 'Main text', panel: 'Example or panel'};
  let flags = Object.create(null);
  let seen = new Set();
  let current = null;
  let shown = null;
  let checked = false;
  let score = {correct: 0, attempted: 0};

  function tell(message) { $('qs-message').textContent = message; }
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) flags = rules.restore(stored, knownIds);
  } catch (error) {
    tell('Saved question progress could not be read. Practice still works; use a backup if needed.');
  }
  function persist() {
    try { localStorage.setItem(storageKey, JSON.stringify({version: 1, flags})); }
    catch (error) { tell('This browser cannot save progress. Export a backup to keep your revisit list.'); }
  }
  const navigation = CourseNavigation.mount($('qs-navigation'), questions, restart);
  function pool() {
    return rules.filtered(questions.filter(question => navigation.matches(question)),
      {type: $('qs-type').value, scope: $('qs-scope').value, revisitOnly: $('qs-revisit').checked}, flags);
  }
  function stats() {
    const matching = pool();
    const remaining = matching.filter(question => !seen.has(question.id)).length;
    $('qs-pool').textContent = matching.length + (matching.length === 1 ? ' question · ' : ' questions · ')
      + ($('qs-repeats').checked ? 'Repeats on' : remaining + ' left');
    $('qs-score').textContent = 'Score ' + score.correct + ' / ' + score.attempted;
    $('qs-saved').textContent = Object.keys(flags).length + ' saved';
  }
  // Bank text is only ever placed with textContent; backticks and fences become DOM nodes.
  function render(container, text) {
    container.replaceChildren();
    let paragraph = null;
    for (const part of rules.tokens(text)) {
      if (part.type === 'pre') {
        const pre = document.createElement('pre'), code = document.createElement('code');
        code.textContent = part.text; pre.append(code); container.append(pre); paragraph = null;
        continue;
      }
      if (!paragraph) { paragraph = document.createElement('p'); container.append(paragraph); }
      if (part.type === 'code') {
        const code = document.createElement('code'); code.textContent = part.text; paragraph.append(code);
      } else paragraph.append(document.createTextNode(part.text));
    }
  }
  function inlineInto(element, text) {
    for (const part of rules.tokens(text)) {
      if (part.type === 'text') element.append(document.createTextNode(part.text));
      else { const code = document.createElement('code'); code.textContent = part.text; element.append(code); }
    }
  }
  function selected() {
    return [...$('qs-options').querySelectorAll('input:checked')].map(input => input.value);
  }
  function link(href, text, external) {
    const item = document.createElement('li'), anchor = document.createElement('a');
    anchor.href = href; anchor.textContent = text;
    if (external) { anchor.target = '_blank'; anchor.rel = 'noopener noreferrer'; }
    item.append(anchor); return item;
  }
  function links() {
    const list = $('qs-links'); list.replaceChildren();
    for (const id of current.sources) {
      const source = bank.sourceLinks[id];
      list.append(link('./index.html#' + encodeURIComponent(id), 'Guide: ' + id + ' · ' + source.title, false));
    }
    for (const id of current.sources) {
      list.append(link(bank.sourceLinks[id].url, 'Original course page: ' + id + ' ↗', true));
    }
    for (const path of current.ab3) {
      list.append(link(ab3Base + path.split('/').map(encodeURIComponent).join('/'), 'AB3 on GitHub: ' + path + ' ↗', true));
    }
  }
  function show() {
    checked = false;
    shown = {...current, options: rules.shuffle(current.options)};
    const multiple = shown.type === 'MRQ';
    $('qs-badge').textContent = multiple ? 'MRQ · select all that apply' : 'MCQ · choose one';
    $('qs-badge').classList.toggle('is-mrq', multiple);
    render($('qs-stem'), shown.stem);
    const fieldset = $('qs-options'); fieldset.replaceChildren();
    for (const option of shown.options) {
      const label = document.createElement('label'); label.className = 'qs-option';
      const input = document.createElement('input');
      input.type = multiple ? 'checkbox' : 'radio'; input.name = 'qs-choice'; input.value = option.key;
      const key = document.createElement('span'); key.className = 'qs-key'; key.textContent = option.key;
      const text = document.createElement('span'); text.className = 'qs-text'; inlineInto(text, option.text);
      const mark = document.createElement('span'); mark.className = 'qs-mark';
      label.append(input, key, text, mark); fieldset.append(label);
    }
    $('qs-result').textContent = ''; $('qs-result').className = 'qs-result';
    $('qs-explanation-wrap').hidden = true;
    $('qs-links-wrap').hidden = true; $('qs-links-wrap').open = false;
    $('qs-check').hidden = false; $('qs-check').disabled = true;
    $('qs-skip').hidden = false;
    $('qs-next').hidden = true; $('qs-retry').hidden = true;
  }
  function status() {
    $('qs-card-status').textContent = flags[current.id] === 'incorrect' ? 'Saved: incorrect'
      : flags[current.id] === 'skipped' ? 'Saved: skipped'
        : current.optional ? 'Optional course topic' : basisLabels[current.basis];
  }
  function next() {
    const previousId = current && current.id;
    current = rules.pick(pool(), seen, $('qs-repeats').checked, previousId);
    const present = Boolean(current);
    $('qs-study').hidden = !present;
    $('qs-empty').hidden = present;
    if (!present) {
      const matching = pool().length;
      $('qs-empty-title').textContent = matching ? 'You’ve seen every question in this selection.' : 'No questions in this selection.';
      $('qs-empty-text').textContent = matching
        ? 'Restart the session or allow repeats to keep practising. Your revisit list is kept.'
        : $('qs-revisit').checked ? 'No saved questions match these filters. Try all topics or switch off Revisit only.'
          : 'Try a different week, topic, type or scope. Weeks 12–13 have no assigned topics, and Git, GitHub, IDE and Java streams topics have no questions because the snapshot only links to external lessons.';
    } else {
      seen.add(current.id);
      $('qs-context-text').textContent = current.topicId + ' · ' + current.topic;
      $('qs-ab3-tag').hidden = !current.ab3.length;
      $('qs-guide').href = './index.html#' + encodeURIComponent(current.topicId);
      status(); show();
    }
    stats();
  }
  function check() {
    if (!current || checked) return;
    const choice = selected();
    if (!choice.length) return;
    checked = true;
    const result = rules.grade(shown, choice);
    const chosen = new Set(choice);
    $('qs-options').querySelectorAll('.qs-option').forEach((label, index) => {
      const option = shown.options[index], picked = chosen.has(option.key);
      const state = option.correct ? (picked ? 'is-correct' : 'is-missed') : (picked ? 'is-wrong' : 'is-other');
      label.classList.add(state);
      label.querySelector('.qs-mark').textContent = state === 'is-correct' ? '✓ Correct'
        : state === 'is-missed' ? 'Missed' : state === 'is-wrong' ? '✗ Wrong choice' : '';
      label.querySelector('input').disabled = true;
    });
    score.attempted += 1;
    if (result.correct) score.correct += 1;
    const parts = [];
    if (result.missed.length) parts.push(result.missed.length + ' missed');
    if (result.wrong.length) parts.push(result.wrong.length + (result.wrong.length === 1 ? ' wrong choice' : ' wrong choices'));
    $('qs-result').textContent = result.correct ? 'Correct' : 'Not quite — ' + parts.join(', ');
    $('qs-result').className = 'qs-result ' + (result.correct ? 'is-correct' : 'is-incorrect');
    $('qs-explanation').textContent = '';
    inlineInto($('qs-explanation'), shown.explanation);
    $('qs-explanation-wrap').hidden = false;
    links(); $('qs-links-wrap').hidden = false;
    const wasSaved = Boolean(flags[current.id]);
    flags = rules.record(flags, current.id, result.correct ? 'correct' : 'incorrect');
    persist();
    tell(result.correct ? (wasSaved ? 'Removed from saved.' : '') : 'Saved for later.');
    status();
    $('qs-check').hidden = true; $('qs-skip').hidden = true;
    $('qs-next').hidden = false; $('qs-retry').hidden = false;
    stats();
    $('qs-next').focus();
  }
  function restart() { seen = new Set(); score = {correct: 0, attempted: 0}; next(); }
  $('qs-empty-groups').textContent = bank.emptyGroups.join('; ');
  $('qs-type').addEventListener('change', restart);
  $('qs-scope').addEventListener('change', restart);
  $('qs-revisit').addEventListener('change', restart);
  $('qs-repeats').addEventListener('change', () => { if (!current) next(); else stats(); });
  $('qs-options').addEventListener('change', () => { if (!checked) $('qs-check').disabled = !selected().length; });
  $('qs-options').addEventListener('keydown', event => {
    if (event.key === 'Enter' && !checked) { event.preventDefault(); check(); }
  });
  $('qs-check').addEventListener('click', check);
  $('qs-next').addEventListener('click', () => { tell(''); next(); });
  $('qs-restart').addEventListener('click', restart);
  $('qs-retry').addEventListener('click', () => {
    if (!current) return;
    show(); tell('Same question, options reshuffled.');
    const first = $('qs-options').querySelector('input'); if (first) first.focus();
  });
  $('qs-skip').addEventListener('click', () => {
    if (!current || checked) return;
    // Skipping an incorrect question must not erase its incorrect status.
    flags = rules.record(flags, current.id, 'skipped');
    tell('Skipped and saved.');
    persist(); next();
  });
  $('qs-export').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({version: 1, flags}, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob), anchor = document.createElement('a');
    anchor.href = url; anchor.download = 'cs2103-questions-revisit.json'; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $('qs-import').addEventListener('click', () => $('qs-file').click());
  $('qs-file').addEventListener('change', async event => {
    try {
      const file = event.target.files[0];
      if (!file || file.size > 2 * 1024 * 1024) throw new Error('File too large');
      const replacement = rules.restore(await file.text(), knownIds);
      flags = replacement; persist(); restart(); tell('Revisit list replaced with the validated backup.');
    } catch (error) { tell('Could not import that backup. Your existing list is unchanged. Use a valid question backup up to 2 MB.'); }
    finally { $('qs-file').value = ''; }
  });
  $('qs-reset').addEventListener('click', () => {
    if (!window.confirm('Clear the saved skipped and incorrect questions?')) return;
    flags = Object.create(null); persist(); restart(); tell('Revisit list cleared. Flashcard and diagram lists are unchanged.');
  });
  // Keep multiple open tabs in sync without rewriting another tab’s data.
  window.addEventListener('storage', event => {
    if (event.key !== storageKey) return;
    try { flags = event.newValue ? rules.restore(event.newValue, knownIds) : Object.create(null); restart(); tell('Revisit list updated from another tab.'); }
    catch (error) { tell('An invalid progress update was ignored.'); }
  });
  next();
})();
