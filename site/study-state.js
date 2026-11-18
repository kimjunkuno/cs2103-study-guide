(function (root) {
  'use strict';
  function clean(value, defaults, choices = {}) {
    const result = {...defaults};
    if (!value || typeof value !== 'object' || Array.isArray(value)) return result;
    for (const [key, fallback] of Object.entries(defaults)) {
      if (!Object.prototype.hasOwnProperty.call(value, key)) continue;
      const item = value[key];
      if (typeof item !== typeof fallback || (typeof item === 'string' && item.length > 500)) continue;
      if (choices[key] && !choices[key].includes(item)) continue;
      result[key] = item;
    }
    return result;
  }
  function remember(page, defaults, choices = {}, storage) {
    const key = 'cs2103-view-' + page + '-v1';
    let state = {...defaults};
    try {
      if (storage === undefined) storage = root.localStorage;
      const raw = storage.getItem(key);
      if (raw && raw.length <= 10000) {
        const saved = JSON.parse(raw);
        if (saved && saved.version === 1) state = clean(saved.values, defaults, choices);
      }
    } catch (error) { /* Browsing still works when storage is blocked or invalid. */ }
    return {
      read: () => ({...state}),
      save: values => {
        state = clean({...state, ...values}, defaults, choices);
        try { storage.setItem(key, JSON.stringify({version: 1, values: state})); }
        catch (error) { /* Keep the selection for this visit when saving is unavailable. */ }
      }
    };
  }
  function controls(page, ids) {
    const elements = ids.map(id => document.getElementById(id));
    const defaults = {}, choices = {};
    for (const element of elements) {
      defaults[element.id] = element.type === 'checkbox' ? element.checked : element.value;
      if (element.tagName === 'SELECT') choices[element.id] = [...element.options].map(option => option.value);
    }
    const memory = remember(page, defaults, choices), saved = memory.read();
    for (const element of elements) {
      if (element.type === 'checkbox') element.checked = saved[element.id];
      else element.value = saved[element.id];
      element.addEventListener(element.type === 'search' ? 'input' : 'change', () => {
        memory.save({[element.id]: element.type === 'checkbox' ? element.checked : element.value});
      });
    }
    return memory;
  }
  const api = {clean, remember, controls};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.StudyState = api;
})(globalThis);
