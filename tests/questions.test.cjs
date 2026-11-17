const {test} = require('node:test');
const assert = require('node:assert/strict');
const {filtered, pick, shuffle, grade, record, restore, tokens} = require('../site/questions-core.js');
const option = (key, correct) => ({key, text: 'Option ' + key, correct});
const mcq = {id: 'W1.1-01', type: 'MCQ', ab3: [], options: [option('A', false), option('B', true), option('C', false), option('D', false)]};
const mrq = {id: 'W1.1-02', type: 'MRQ', ab3: [], options: [option('A', true), option('B', false), option('C', true), option('D', true), option('E', false)]};
const ab3 = {id: 'W1.2-01', type: 'MCQ', ab3: ['src/main/java/seedu/address/Main.java'], options: mcq.options};
const ab3Mrq = {id: 'W1.2-02', type: 'MRQ', ab3: ['README.md'], options: mrq.options};
const bank = [mcq, mrq, ab3, ab3Mrq];

test('MCQ grading marks the key right and anything else wrong', () => {
  assert.deepEqual(grade(mcq, ['B']), {correct: true, missed: [], wrong: []});
  assert.deepEqual(grade(mcq, ['A']), {correct: false, missed: ['B'], wrong: ['A']});
});
test('MRQ grading is all-or-nothing and reports missed and wrong options', () => {
  assert.deepEqual(grade(mrq, ['A', 'C', 'D']), {correct: true, missed: [], wrong: []});
  assert.deepEqual(grade(mrq, ['D', 'A', 'C']).correct, true);
  assert.deepEqual(grade(mrq, ['A', 'C']), {correct: false, missed: ['D'], wrong: []});
  assert.deepEqual(grade(mrq, ['A', 'B', 'C', 'D']), {correct: false, missed: [], wrong: ['B']});
  assert.deepEqual(grade(mrq, ['A', 'B']), {correct: false, missed: ['C', 'D'], wrong: ['B']});
  assert.deepEqual(grade(mrq, []), {correct: false, missed: ['A', 'C', 'D'], wrong: []});
  assert.equal(grade(mcq, []).correct, false);
});
test('shuffle keeps every option with its correct flag and relabels A–E', () => {
  const shuffled = shuffle(mrq.options, () => 0);
  assert.deepEqual(shuffled.map(item => item.key), ['A', 'B', 'C', 'D', 'E']);
  assert.deepEqual(shuffled.map(item => item.text).sort(), mrq.options.map(item => item.text).sort());
  for (const item of shuffled) assert.equal(item.correct, mrq.options.find(original => original.text === item.text).correct);
  assert.equal(shuffled.filter(item => item.correct).length, 3);
  assert.notDeepEqual(shuffled.map(item => item.text), mrq.options.map(item => item.text));
  assert.deepEqual(mrq.options.map(item => item.key), ['A', 'B', 'C', 'D', 'E'], 'input is not modified');
  assert.equal(mrq.options[0].text, 'Option A');
});
test('shuffle is deterministic with an injected random and can keep or reverse the order', () => {
  const sequence = values => { let i = 0; return () => values[i++ % values.length]; };
  assert.deepEqual(shuffle(mcq.options, sequence([0.3, 0.7, 0.1])), shuffle(mcq.options, sequence([0.3, 0.7, 0.1])));
  assert.deepEqual(shuffle(mcq.options, () => 0.999).map(item => item.text), mcq.options.map(item => item.text));
  assert.deepEqual(shuffle(mcq.options, () => 1).map(item => item.text), mcq.options.map(item => item.text));
});
test('grading uses the shuffled letters', () => {
  const shown = {...mrq, options: shuffle(mrq.options, () => 0)};
  const keys = shown.options.filter(item => item.correct).map(item => item.key);
  assert.equal(grade(shown, keys).correct, true);
  assert.equal(grade(shown, ['A', 'B', 'C', 'D', 'E'].filter(key => !keys.includes(key))).correct, false);
});
test('type, scope and revisit filters combine', () => {
  const ids = (options, flags = {}) => filtered(bank, options, flags).map(item => item.id);
  assert.deepEqual(ids({}), bank.map(item => item.id));
  assert.deepEqual(ids({type: 'MCQ'}), ['W1.1-01', 'W1.2-01']);
  assert.deepEqual(ids({type: 'MRQ'}), ['W1.1-02', 'W1.2-02']);
  assert.deepEqual(ids({scope: 'theory'}), ['W1.1-01', 'W1.1-02']);
  assert.deepEqual(ids({scope: 'ab3'}), ['W1.2-01', 'W1.2-02']);
  assert.deepEqual(ids({type: 'MRQ', scope: 'ab3'}), ['W1.2-02']);
  assert.deepEqual(ids({revisitOnly: true}, {'W1.1-02': 'skipped', 'W1.2-01': 'incorrect'}), ['W1.1-02', 'W1.2-01']);
  assert.deepEqual(ids({type: 'MRQ', scope: 'theory', revisitOnly: true}, {'W1.1-02': 'skipped', 'W1.2-01': 'incorrect'}), ['W1.1-02']);
  assert.deepEqual(ids({type: 'MCQ', scope: 'theory', revisitOnly: true}, {'W1.1-02': 'skipped'}), []);
});
test('no-repeat practice exhausts the pool exactly once', () => {
  const seen = new Set(); let previous = null; let question;
  while ((question = pick(bank, seen, false, previous, () => 0))) { assert.ok(!seen.has(question.id)); seen.add(question.id); previous = question.id; }
  assert.equal(seen.size, bank.length); assert.equal(pick(bank, seen, false, previous), null);
});
test('repeat-enabled selection avoids the last question when it can', () => {
  assert.equal(pick(bank, new Set(bank.map(item => item.id)), true, 'W1.1-01', () => 0).id, 'W1.1-02');
  assert.equal(pick([mcq], new Set([mcq.id]), true, mcq.id, () => 0).id, mcq.id);
  assert.equal(pick([], new Set(), true, null), null); assert.equal(pick([], new Set(), false, null), null);
});
test('revisit flags: wrong saves, skip never downgrades incorrect, correct clears', () => {
  let flags = Object.create(null);
  flags = record(flags, 'a', 'skipped'); assert.equal(flags.a, 'skipped');
  flags = record(flags, 'a', 'incorrect'); assert.equal(flags.a, 'incorrect');
  flags = record(flags, 'a', 'skipped'); assert.equal(flags.a, 'incorrect');
  flags = record(flags, 'a', 'correct'); assert.equal(flags.a, undefined);
  assert.equal(Object.getPrototypeOf(flags), null);
  const before = {b: 'skipped'}; record(before, 'b', 'correct'); assert.equal(before.b, 'skipped', 'input is not modified');
  assert.throws(() => record(flags, 'a', 'maybe'));
});
test('backup round trip keeps skipped and incorrect states', () => {
  const flags = {'W1.1-01': 'skipped', 'W1.1-02': 'incorrect'};
  const restored = restore(JSON.stringify({version: 1, flags}), new Set(Object.keys(flags)));
  assert.equal(Object.getPrototypeOf(restored), null);
  assert.equal(restored['W1.1-01'], 'skipped'); assert.equal(restored['W1.1-02'], 'incorrect');
});
test('unknown IDs and prototype keys are not imported', () => {
  const state = restore('{"version":1,"flags":{"a":"incorrect","unknown":"skipped","__proto__":"skipped","constructor":"skipped"}}', new Set(['a']));
  assert.deepEqual(Object.keys(state), ['a']); assert.equal(state.__proto__, undefined); assert.equal(state.constructor, undefined);
});
test('invalid and future backups reject atomically', () => {
  for (const data of ['invalid', 'null', '[]', '{}', '{"version":2,"flags":{}}', '{"version":"1","flags":{}}', '{"version":1,"flags":[]}',
    '{"version":1,"flags":{"a":"correct"}}', '{"version":1,"flags":{"a":true}}', '{"version":1,"flags":null}']) {
    assert.throws(() => restore(data, new Set(['a'])), data);
  }
});
test('tokens split inline code and fenced blocks without producing markup', () => {
  assert.deepEqual(tokens('Call `run()` now'), [{type: 'text', text: 'Call '}, {type: 'code', text: 'run()'}, {type: 'text', text: ' now'}]);
  assert.deepEqual(tokens('What prints?\n```\nint a = 1;\n  a++;\n```'),
    [{type: 'text', text: 'What prints?'}, {type: 'pre', text: 'int a = 1;\n  a++;'}]);
  assert.deepEqual(tokens('<b>not markup</b> & `<i>`'), [{type: 'text', text: '<b>not markup</b> & '}, {type: 'code', text: '<i>'}]);
  assert.deepEqual(tokens('a lone ` backtick'), [{type: 'text', text: 'a lone ` backtick'}]);
  assert.deepEqual(tokens('Before\n```\nx\n```\nafter `y`'),
    [{type: 'text', text: 'Before'}, {type: 'pre', text: 'x'}, {type: 'text', text: 'after '}, {type: 'code', text: 'y'}]);
});
test('every question in the real bank grades its own key as correct, even after shuffling', () => {
  globalThis.COURSE_QUESTIONS = undefined;
  require('../site/questions-data.js');
  const real = globalThis.COURSE_QUESTIONS.questions;
  assert.equal(real.length, 1422);
  for (const question of real) {
    const shown = {...question, options: shuffle(question.options)};
    const keys = shown.options.filter(item => item.correct).map(item => item.key);
    assert.equal(grade(shown, keys).correct, true, question.id);
    for (const item of shown.options) if (!item.correct) assert.equal(grade(shown, [...keys, item.key]).correct, false, question.id);
    for (const part of tokens(question.stem)) assert.ok(part.text.length > 0, question.id);
  }
});
