(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const cards = [...document.querySelectorAll('.topic')];
  const empty = [...document.querySelectorAll('.empty-week')];
  const searchMemory = StudyState.controls('guide-controls', ['search']);
  const readingMemory = StudyState.remember('guide-reading', {mode: 'quick'}, {mode: ['quick', 'full', 'recall']});
  let mode = 'quick';
  const navigation = CourseNavigation.mount($('guide-navigation'), cards.map(card => ({id: card.id})), filter);
  CourseNavigation.chapterTree($('guide-chapters'), navigation);
  const canonicalId = card => navigation.metadata(card.id).duplicateOf || card.id;
  const topicGroups = new Map();
  for (const card of cards) {
    const key = canonicalId(card);
    if (!topicGroups.has(key)) topicGroups.set(key, []);
    topicGroups.get(key).push(card);
  }
  const textIndex = new Map();
  const sourceLinks = new Map(cards.map(card => [card, card.querySelector('.topic-meta a').cloneNode(true)]));
  for (const card of cards) {
    const group = topicGroups.get(canonicalId(card));
    textIndex.set(card, (group.map(item => item.dataset.group + ' ' + item.id).join(' ') + ' '
      + navigation.metadata(card.id).title + ' ' + navigation.metadata(card.id).chapter + ' '
      + card.querySelector('.source-content').textContent).toLowerCase());
    if (group.length > 1) {
      const meta = card.querySelector('.topic-meta');
      meta.classList.add('shared-topic-meta');
      meta.querySelector('span').textContent = group.map(item => item.id).join(' · ');
      const sources = group.map(item => {
        const link = sourceLinks.get(item).cloneNode(true);
        link.textContent = 'Source W' + item.dataset.week + ' ↗';
        return link;
      });
      meta.querySelectorAll('a').forEach(link => link.remove());
      meta.append(...sources);
    }
    card.querySelector('.reveal').addEventListener('click', () => {
      const shown = card.classList.toggle('revealed');
      card.querySelector('.reveal').textContent = shown ? 'Hide answer' : 'Reveal answer';
    });
  }
  function clearTopicHash() {
    if (cards.some(card => '#' + card.id === location.hash)) {
      history.replaceState(history.state, '', location.pathname + location.search);
    }
  }
  function filter(reason) {
    if (reason === 'filter') clearTopicHash();
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
    const visible = new Set(CourseNavigation.uniqueTopics(ordered.filter(card => navigation.matches({id: card.id})
      && words.every(word => textIndex.get(card).includes(word)))));
    document.querySelectorAll('.group-heading').forEach(heading => heading.remove());
    let count = 0, last = '';
    const fragment = document.createDocumentFragment();
    for (const card of ordered) {
      const match = visible.has(card);
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
    $('results').textContent = count === topicGroups.size ? count + ' topics' : count + ' / ' + topicGroups.size + ' topics';
    $('scope').textContent = state.mode === 'week' ? (state.week ? 'Week ' + state.week : 'All weeks') : state.chapter || state.category || 'Textbook';
    $('no-results').hidden = Boolean(count || empties);
    $('week-nav').hidden = state.mode !== 'week'; $('guide-chapters').hidden = state.mode !== 'textbook';
    document.querySelectorAll('[data-week-button]').forEach(button => {
      const active = Number(button.dataset.weekButton) === Number(state.week);
      button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
    });
  }
  function setMode(value) {
    readingMemory.save({mode: value});
    mode = value; document.body.classList.toggle('recall', mode === 'recall'); document.body.classList.toggle('full-mode', mode === 'full');
    for (const card of cards) { card.querySelector('.full').open = mode === 'full'; card.querySelectorAll('.point-context').forEach(details => { details.open = false; }); card.classList.remove('revealed'); card.querySelector('.reveal').textContent = 'Reveal answer'; }
    document.querySelectorAll('[data-mode]').forEach(button => { const active = button.dataset.mode === mode; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
  }
  document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => setMode(button.dataset.mode)));
  document.querySelectorAll('[data-week-button]').forEach(button => button.addEventListener('click', () => navigation.selectWeek(button.dataset.weekButton || '')));
  $('search').addEventListener('input', () => { clearTopicHash(); filter(); });
  $('clear').addEventListener('click', () => { $('search').value = ''; searchMemory.save({search: ''}); navigation.reset(); });
  $('print').addEventListener('click', () => window.print());
  window.addEventListener('beforeprint', () => { document.body.classList.toggle('print-full', mode === 'full'); document.body.classList.toggle('print-quick', mode !== 'full'); });
  function followHash() {
    let id; try { id = decodeURIComponent(location.hash.slice(1)); } catch (error) { return; }
    const card = cards.find(item => item.id === id);
    if (card) {
      $('search').value = ''; searchMemory.save({search: ''}); navigation.selectTopic(id);
      const visible = topicGroups.get(canonicalId(card)).find(item => !item.hidden);
      if (visible) setTimeout(() => visible.scrollIntoView(), 60);
    }
  }
  window.addEventListener('hashchange', followHash); setMode(readingMemory.read().mode); filter(); followHash();
})();
