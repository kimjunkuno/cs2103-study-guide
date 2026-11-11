(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const cards = [...document.querySelectorAll('.topic')];
  const empty = [...document.querySelectorAll('.empty-week')];
  const key = 'cs2103-theory-2026-progress';
  let mode = 'quick', saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch (error) {}
  if (!saved || typeof saved !== 'object' || Array.isArray(saved)) saved = {};
  const navigation = CourseNavigation.mount($('guide-navigation'), cards.map(card => ({id: card.id})), filter);
  CourseNavigation.chapterTree($('guide-chapters'), navigation);
  const textIndex = new Map(cards.map(card => [card, (card.dataset.group + ' ' + card.id + ' '
    + navigation.metadata(card.id).title + ' ' + navigation.metadata(card.id).chapter + ' ' + card.querySelector('.source-content').textContent).toLowerCase()]));
  for (const card of cards) {
    const select = card.querySelector('.progress');
    select.value = ['0', '1', '2'].includes(String(saved[card.id])) ? String(saved[card.id]) : '0';
    select.addEventListener('change', () => { saved[card.id] = select.value; persist(); filter(); });
    card.querySelector('.reveal').addEventListener('click', () => {
      const shown = card.classList.toggle('revealed');
      card.querySelector('.reveal').textContent = shown ? 'Hide answer' : 'Reveal answer';
    });
  }
  function persist() {
    try { localStorage.setItem(key, JSON.stringify(saved)); $('storageNote').textContent = 'Progress saved.'; }
    catch (error) { $('storageNote').textContent = 'Storage unavailable. Export a backup to keep progress.'; }
  }
  function filter() {
    const state = navigation.state();
    const words = $('search').value.toLowerCase().trim().split(/\s+/).filter(Boolean), progress = $('status').value;
    const catalog = COURSE_TOPICS;
    const rank = card => {
      const topic = navigation.metadata(card.id);
      const category = catalog.categories.findIndex(item => item.label === topic.category);
      const chapter = catalog.categories[category].chapters.indexOf(topic.chapter);
      return category * 100000 + chapter * 1000 + topic.order;
    };
    const ordered = [...cards].sort((a, b) => state.mode === 'week'
      ? CourseNavigation.compareIds(a.id, b.id) : rank(a) - rank(b));
    document.querySelectorAll('.group-heading').forEach(heading => heading.remove());
    let count = 0, last = '';
    const fragment = document.createDocumentFragment();
    for (const card of ordered) {
      const match = navigation.matches({id: card.id}) && (progress === '' || card.querySelector('.progress').value === progress)
        && words.every(word => textIndex.get(card).includes(word));
      card.hidden = !match;
      if (match) {
        count++;
        const topic = navigation.metadata(card.id);
        const label = state.mode === 'week' ? card.dataset.group : topic.category + ' › ' + topic.chapter;
        if (label !== last) {
          const heading = document.createElement('h2'); heading.className = 'group-heading'; heading.textContent = label;
          fragment.append(heading); last = label;
        }
      }
      fragment.append(card);
    }
    $('cards').prepend(fragment);
    let empties = 0;
    for (const item of empty) {
      item.hidden = !(state.mode === 'week' && state.week === item.dataset.week && !words.length && !progress && !state.topic);
      if (!item.hidden) empties++;
    }
    $('results').textContent = count === cards.length ? count + ' topics' : count + ' / ' + cards.length + ' topics';
    $('scope').textContent = state.mode === 'week' ? (state.week ? 'Week ' + state.week : 'All weeks') : state.chapter || state.category || 'Textbook';
    $('no-results').hidden = Boolean(count || empties);
    $('week-nav').hidden = state.mode !== 'week'; $('guide-chapters').hidden = state.mode !== 'textbook';
    const confident = cards.filter(card => card.querySelector('.progress').value === '2').length;
    $('progressText').textContent = confident + ' / ' + cards.length + ' confident';
    $('progressbar').firstElementChild.style.width = confident / cards.length * 100 + '%';
    document.querySelectorAll('[data-week-button]').forEach(button => {
      const active = Number(button.dataset.weekButton) === Number(state.week);
      button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
    });
  }
  function setMode(value) {
    mode = value; document.body.classList.toggle('recall', mode === 'recall'); document.body.classList.toggle('full-mode', mode === 'full');
    for (const card of cards) { card.querySelector('.full').open = mode === 'full'; card.querySelectorAll('.point-context').forEach(details => { details.open = false; }); card.classList.remove('revealed'); card.querySelector('.reveal').textContent = 'Reveal answer'; }
    document.querySelectorAll('[data-mode]').forEach(button => { const active = button.dataset.mode === mode; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
  }
  document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => setMode(button.dataset.mode)));
  document.querySelectorAll('[data-week-button]').forEach(button => button.addEventListener('click', () => navigation.selectWeek(button.dataset.weekButton || '')));
  ['search', 'status'].forEach(id => $(id).addEventListener(id === 'search' ? 'input' : 'change', filter));
  $('clear').addEventListener('click', () => { $('search').value = ''; $('status').value = ''; navigation.reset(); });
  $('print').addEventListener('click', () => window.print());
  window.addEventListener('beforeprint', () => { document.body.classList.toggle('print-full', mode === 'full'); document.body.classList.toggle('print-quick', mode !== 'full'); });
  $('export').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify({guide: 'CS2103-T-2026', progress: saved}, null, 2)], {type: 'application/json'}));
    const link = document.createElement('a'); link.href = url; link.download = 'cs2103-study-progress.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $('import').addEventListener('click', () => $('import-file').click());
  $('import-file').addEventListener('change', async event => {
    try {
      const file = event.target.files[0]; if (!file || file.size > 2 * 1024 * 1024) throw new Error();
      const data = JSON.parse(await file.text());
      if (data.guide !== 'CS2103-T-2026' || !data.progress || typeof data.progress !== 'object' || Array.isArray(data.progress)) throw new Error();
      const next = {};
      for (const card of cards) { const value = data.progress[card.id] ?? '0'; if (!['0', '1', '2'].includes(value)) throw new Error(); next[card.id] = value; }
      saved = next; cards.forEach(card => card.querySelector('.progress').value = saved[card.id]); persist(); filter();
    } catch (error) { $('storageNote').textContent = 'Invalid backup. Choose a guide backup up to 2 MB.'; }
    finally { $('import-file').value = ''; }
  });
  $('reset').addEventListener('click', () => { if (window.confirm('Reset all saved guide progress?')) { saved = {}; cards.forEach(card => card.querySelector('.progress').value = '0'); persist(); filter(); } });
  function followHash() {
    let id; try { id = decodeURIComponent(location.hash.slice(1)); } catch (error) { return; }
    const card = cards.find(item => item.id === id);
    if (card) { $('search').value = ''; $('status').value = ''; navigation.selectTopic(id); setTimeout(() => card.scrollIntoView(), 60); }
  }
  window.addEventListener('hashchange', followHash); filter(); followHash();
})();
