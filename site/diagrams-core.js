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
  function partIds(scene) {
    return [...scene.nodes.flatMap(node => [node.id, ...node.rows.map(row => row.id)]),
      ...scene.edges.flatMap(edge => [edge.id, ...edge.multiplicity.map(item => item.id)]), ...scene.shapes.map(shape => shape.id)];
  }
  function assess(question, choice) {
    if (!partIds(question.scene).includes(choice)) throw new Error('Unknown diagram element');
    return question.answerIds.includes(choice);
  }
  const api = {correctedScene, partIds, assess};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.DiagramCore = api;
})(globalThis);
