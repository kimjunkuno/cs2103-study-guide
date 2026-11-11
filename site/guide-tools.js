(function () {
  'use strict';
  const searchBar = document.querySelector('.guide-search-tools');
  const search = document.getElementById('search');
  const results = document.getElementById('guide-results');
  const topButton = document.getElementById('back-to-top');
  const sidebar = document.querySelector('.sidebar');
  const root = document.documentElement;
  function sizes() {
    const headerHeight = window.matchMedia('(max-width:1100px)').matches ? sidebar.getBoundingClientRect().height : 0;
    root.style.setProperty('--guide-header-height', headerHeight + 'px');
    root.style.setProperty('--guide-search-height', searchBar.getBoundingClientRect().height + 'px');
  }
  const observer = new ResizeObserver(sizes);
  observer.observe(sidebar); observer.observe(searchBar);
  window.addEventListener('resize', sizes, {passive: true});
  function updateTop() { topButton.hidden = window.scrollY < 400; }
  window.addEventListener('scroll', updateTop, {passive: true});
  topButton.addEventListener('click', () => {
    const heading = document.querySelector('h1');
    heading.setAttribute('tabindex', '-1'); heading.focus({preventScroll: true});
    window.scrollTo({top: 0, behavior: 'instant'});
  });
  // Filtering runs first in app.js. Bring its results into view while keeping
  // focus in search so mobile users can continue typing without reopening it.
  search.addEventListener('input', () => {
    if (results.getBoundingClientRect().top < searchBar.getBoundingClientRect().bottom) {
      results.scrollIntoView({block: 'start', behavior: 'instant'});
    }
  });
  sizes(); updateTop();
})();
