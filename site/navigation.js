(function (root) {
  'use strict';
  function compareIds(a, b) {
    return a.localeCompare(b, 'en', {numeric: true});
  }
  function matches(topic, state) {
    if (!topic) return false;
    if (state.mode === 'week') return (!state.week || topic.week === Number(state.week))
      && (!state.topic || topic.topicKey === state.topic);
    return (!state.category || topic.category === state.category)
      && (!state.chapter || topic.chapter === state.chapter)
      && (!state.topic || topic.topicKey === state.topic);
  }
  function available(catalog, records) {
    const ids = new Set(records.map(record => record.topicId || record.id));
    return catalog.topics.filter(topic => ids.has(topic.id));
  }
  function switchMode(state, mode, topics) {
    const selected = topics.filter(topic => state.topic && topic.topicKey === state.topic);
    const first = selected.find(topic => topic.week === Number(state.week)) || selected[0];
    return {mode, category: mode === 'textbook' && first ? first.category : '',
      chapter: mode === 'textbook' && first ? first.chapter : '', topic: first ? first.topicKey : '',
      week: mode === 'week' && first ? String(first.week) : state.week || ''};
  }
  function mount(container, records, onChange, catalog = root.COURSE_TOPICS) {
    const topics = available(catalog, records);
    const byId = new Map(topics.map(topic => [topic.id, topic]));
    const state = {mode: 'textbook', category: '', chapter: '', topic: '', week: ''};
    const controls = {};
    const labels = {};
    container.classList.add('course-navigation');
    function field(key, title) {
      const label = document.createElement('label');
      label.append(document.createTextNode(title));
      const select = document.createElement('select');
      select.setAttribute('aria-label', key === 'mode' ? 'Browse mode' : 'Browse by ' + title.toLowerCase());
      select.dataset.navigation = key;
      label.append(select); container.append(label);
      controls[key] = select; labels[key] = label;
      select.addEventListener('change', () => {
        if (key === 'mode') Object.assign(state, switchMode(state, select.value, topics));
        else state[key] = select.value;
        if (key === 'category') { state.chapter = ''; state.topic = ''; }
        if (key === 'chapter' || key === 'week') state.topic = '';
        update(); onChange();
      });
    }
    function options(key, items) {
      const select = controls[key]; select.replaceChildren();
      for (const [value, text] of items) {
        const option = document.createElement('option'); option.value = value; option.textContent = text;
        select.append(option);
      }
      select.value = state[key];
      if (select.selectedIndex === -1) { state[key] = ''; select.value = ''; }
    }
    field('mode', 'Browse'); field('category', 'Category'); field('chapter', 'Chapter');
    field('week', 'Week'); field('topic', 'Topic');
    function update() {
      options('mode', [['textbook', 'Textbook'], ['week', 'Week']]);
      labels.week.hidden = state.mode !== 'week';
      labels.category.hidden = state.mode !== 'textbook';
      labels.chapter.hidden = state.mode !== 'textbook' || !state.category;
      labels.topic.hidden = state.mode === 'textbook' ? !state.chapter : !state.week && !state.topic;
      options('category', [['', 'All categories'], ...catalog.categories
        .filter(category => topics.some(topic => topic.category === category.label))
        .map(category => [category.label, category.label])]);
      const chapterItems = catalog.categories.filter(category => !state.category || category.label === state.category)
        .flatMap(category => category.chapters.filter(chapter => topics.some(topic => topic.category === category.label && topic.chapter === chapter))
          .map(chapter => [chapter, chapter]));
      options('chapter', [['', 'All chapters'], ...chapterItems]);
      options('week', [['', 'All weeks'], ...Array.from({length: 13}, (_, index) => [String(index + 1), 'Week ' + (index + 1)])]);
      const eligible = topics.filter(topic => state.mode === 'week'
        ? !state.week || topic.week === Number(state.week)
        : (!state.category || topic.category === state.category) && (!state.chapter || topic.chapter === state.chapter));
      const groups = new Map();
      for (const topic of eligible) {
        if (!groups.has(topic.topicKey)) groups.set(topic.topicKey, []);
        groups.get(topic.topicKey).push(topic);
      }
      const order = topic => catalog.categories.findIndex(category => category.label === topic.category) * 100000
        + catalog.categories.find(category => category.label === topic.category).chapters.indexOf(topic.chapter) * 1000 + topic.order;
      const grouped = [...groups.values()].sort((a, b) => state.mode === 'week'
        ? compareIds(a[0].id, b[0].id) : order(a[0]) - order(b[0]));
      options('topic', [['', 'All topics'], ...grouped.map(group => [group[0].topicKey,
        group[0].label + ' · ' + group.map(topic => topic.id).sort(compareIds).join(', ')])]);
      container.dispatchEvent(new CustomEvent('navigation-updated'));
    }
    const api = {
      matches: record => matches(byId.get(record.topicId || record.id), state),
      metadata: id => byId.get(id),
      state: () => ({...state}),
      selectWeek: week => { Object.assign(state, {mode: 'week', week: String(week), category: '', chapter: '', topic: ''}); update(); onChange(); },
      selectChapter: (category, chapter) => { Object.assign(state, {mode: 'textbook', category, chapter, week: '', topic: ''}); update(); onChange(); },
      selectTopic: id => {
        const topic = byId.get(id); if (!topic) return;
        Object.assign(state, {category: topic.category, chapter: topic.chapter, topic: topic.topicKey, week: String(topic.week)});
        update(); onChange();
      },
      reset: () => { Object.assign(state, {category: '', chapter: '', topic: '', week: ''}); update(); onChange(); }
    };
    update(); return api;
  }
  function chapterTree(container, navigation, catalog = root.COURSE_TOPICS) {
    for (const category of catalog.categories) {
      const details = document.createElement('details');
      const summary = document.createElement('summary'); summary.textContent = category.label;
      details.append(summary);
      for (const chapter of category.chapters) {
        const button = document.createElement('button'); button.type = 'button'; button.textContent = chapter;
        button.addEventListener('click', () => { details.open = true; navigation.selectChapter(category.label, chapter); });
        details.append(button);
      }
      container.append(details);
    }
  }
  const api = {compareIds, matches, available, switchMode, mount, chapterTree};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CourseNavigation = api;
})(globalThis);
