(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const cards = [...document.querySelectorAll('.topic')];
  const empty = [...document.querySelectorAll('.empty-week')];
  let mode = 'quick';
  const navigation = CourseNavigation.mount($('guide-navigation'), cards.map(card => ({id: card.id})), filter);
  CourseNavigation.chapterTree($('guide-chapters'), navigation);
  const textIndex = new Map(cards.map(card => [card, (card.dataset.group + ' ' + card.id + ' '
    + navigation.metadata(card.id).title + ' ' + navigation.metadata(card.id).chapter + ' ' + card.querySelector('.source-content').textContent).toLowerCase()]));
  for (const card of cards) {
    card.querySelector('.reveal').addEventListener('click', () => {
      const shown = card.classList.toggle('revealed');
      card.querySelector('.reveal').textContent = shown ? 'Hide answer' : 'Reveal answer';
    });
  }
  function filter() {
    const state = navigation.state();
    const words = $('search').value.toLowerCase().trim().split(/\s+/).filter(Boolean);
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
      const match = navigation.matches({id: card.id}) && words.every(word => textIndex.get(card).includes(word));
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
      item.hidden = !(state.mode === 'week' && state.week === item.dataset.week && !words.length && !state.topic);
      if (!item.hidden) empties++;
    }
    $('results').textContent = count === cards.length ? count + ' topics' : count + ' / ' + cards.length + ' topics';
    $('scope').textContent = state.mode === 'week' ? (state.week ? 'Week ' + state.week : 'All weeks') : state.chapter || state.category || 'Textbook';
    $('no-results').hidden = Boolean(count || empties);
    $('week-nav').hidden = state.mode !== 'week'; $('guide-chapters').hidden = state.mode !== 'textbook';
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
  $('search').addEventListener('input', filter);
  $('clear').addEventListener('click', () => { $('search').value = ''; navigation.reset(); });
  $('print').addEventListener('click', () => window.print());
  window.addEventListener('beforeprint', () => { document.body.classList.toggle('print-full', mode === 'full'); document.body.classList.toggle('print-quick', mode !== 'full'); });
  function followHash() {
    let id; try { id = decodeURIComponent(location.hash.slice(1)); } catch (error) { return; }
    const card = cards.find(item => item.id === id);
    if (card) { $('search').value = ''; navigation.selectTopic(id); setTimeout(() => card.scrollIntoView(), 60); }
  }
  window.addEventListener('hashchange', followHash); filter(); followHash();
})();
