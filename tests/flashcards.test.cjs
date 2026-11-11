const {test} = require('node:test');
const assert = require('node:assert/strict');
const {filtered, pick, restore} = require('../site/flashcards-core.js');
const cards = [{id:'a',week:1,topic:'OOP'},{id:'b',week:2,topic:'Testing'},{id:'c',week:1,topic:'OOP'}];
test('week, topic and saved-only filters combine',()=>{
 assert.deepEqual(filtered(cards,'1','OOP',true,{c:'incorrect'}).map(c=>c.id),['c']);
 assert.deepEqual(filtered(cards,'2','OOP',false,{}),[]);
 assert.equal(filtered(cards,'','',false,{}).length,3);
 assert.deepEqual(filtered(cards,'12','',false,{}),[]);
});
test('no-repeat practice exhausts the selected pool exactly once',()=>{
 const seen=new Set();let previous=null;let card;
 while((card=pick(cards,seen,false,previous,()=>0))){assert.ok(!seen.has(card.id));seen.add(card.id);previous=card.id;}
 assert.equal(seen.size,3);assert.equal(pick(cards,seen,false,previous),null);
});
test('repeat-enabled selection reuses seen cards without immediately repeating the last',()=>{
 assert.equal(pick(cards,new Set(['a','b','c']),true,'a',()=>0).id,'b');
 assert.equal(pick([cards[0]],new Set(['a']),true,'a',()=>0).id,'a');
});
test('empty pool is safe in either mode',()=>{
 assert.equal(pick([],new Set(),true,null),null);assert.equal(pick([],new Set(),false,null),null);
});
test('all random ranges can select their eligible card',()=>{
 for(let i=0;i<3;i++)assert.equal(pick(cards,new Set(),false,null,()=> (i+.5)/3).id,cards[i].id);
});
test('backup round trip keeps skipped and incorrect states',()=>{
 const flags={a:'skipped',b:'incorrect'};const restored=restore(JSON.stringify({version:1,flags}),new Set(['a','b']));
 assert.equal(Object.getPrototypeOf(restored),null);assert.equal(restored.a,'skipped');assert.equal(restored.b,'incorrect');
});
test('unknown IDs and prototype keys do not get imported',()=>{
 const state=restore('{"version":1,"flags":{"a":"incorrect","unknown":"skipped","__proto__":"skipped"}}',new Set(['a']));
 assert.deepEqual(Object.keys(state),['a']);assert.equal(state.__proto__,undefined);
});
test('invalid and future backups reject atomically',()=>{
 for(const data of ['invalid','null','[]','{"version":2,"flags":{}}','{"version":1,"flags":[]}','{"version":1,"flags":{"a":"correct"}}','{"version":1,"flags":null}'])assert.throws(()=>restore(data,new Set(['a'])));
});
