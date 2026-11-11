(function (root) {
  'use strict';
  function correctedScene(question) {
    const scene = JSON.parse(JSON.stringify(question.scene));
    for (const fix of question.fixes) {
      if (!/^(nodes|edges|shapes|texts)\.\d+\.[a-zA-Z0-9.]+$/.test(fix.path)) throw new Error('Invalid correction path');
      const keys = fix.path.split('.'); let parent = scene;
      for (const key of keys.slice(0, -1)) {
        if (['__proto__', 'constructor', 'prototype'].includes(key) || !Object.prototype.hasOwnProperty.call(parent, key)) throw new Error('Invalid correction path');
        parent = parent[key];
      }
      const last = keys.at(-1);
      if (['__proto__', 'constructor', 'prototype'].includes(last) || !Object.prototype.hasOwnProperty.call(parent, last)) throw new Error('Invalid correction field');
      parent[last] = fix.value;
    }
    return scene;
  }
  // Keep original mistake IDs so saved exercises and old backups still work.
  function createDeck(cases) {
    return cases.flatMap(question => {
      const base = {id: question.id, family: question.family, context: question.context,
        topicId: question.topicId, source: question.source, rule: question.rule};
      return [
        {...base, scene: question.scene, isCorrect: false,
          answer: 'Incorrect. ' + question.explanation},
        {...base, id: question.id + '-correct', scene: correctedScene(question),
          isCorrect: true, answer: 'Correct. ' + question.rule}
      ];
    });
  }
  const api = {correctedScene, createDeck};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.DiagramCore = api;
})(globalThis);
