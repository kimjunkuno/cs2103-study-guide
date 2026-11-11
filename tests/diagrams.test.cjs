const {test}=require('node:test'),assert=require('node:assert/strict'),{readFileSync}=require('node:fs');
const core=require('../site/diagrams-core.js');
const data=JSON.parse(readFileSync('site/diagrams-data.js','utf8').replace('globalThis.DIAGRAM_QUESTIONS = ','').replace(/;\s*$/,''));
const cases=data.cases,deck=core.createDeck(cases);
test('24 exercises cover the six required diagram families only',()=>{
 assert.equal(cases.length,24);assert.equal(new Set(cases.map(q=>q.id)).size,24);
 const families=['class','object','conceptual','sequence','activity','architecture'];
 assert.deepEqual([...new Set(cases.map(q=>q.family))].sort(),families.sort());
 for(const family of families)assert.equal(cases.filter(q=>q.family===family).length,4);
 for(const q of cases){assert.equal(q.optional,false);assert.ok(!q.topicId.startsWith('W11.'));assert.ok(q.context&&q.rule&&q.explanation);assert.doesNotMatch(q.context,/\b(?:find the|tap|incorrect|wrong|mistake|error|notation)\b/i);assert.match(q.source,/^https:\/\/nus-cs2103-ay2627-s1.github.io\/website\/schedule\/week[469]\/topics.html#/);}
});
test('48 neutral cards include correct and incorrect examples in every family',()=>{
 assert.equal(deck.length,48);assert.equal(new Set(deck.map(q=>q.id)).size,48);
 for(const family of new Set(cases.map(q=>q.family))){
  const cards=deck.filter(q=>q.family===family);
  assert.equal(cards.length,8);assert.equal(cards.filter(q=>q.isCorrect).length,4);
 }
 for(const q of cases){
  const wrong=deck.find(c=>c.id===q.id),right=deck.find(c=>c.id===q.id+'-correct');
  assert.equal(wrong.context,right.context);assert.equal(wrong.context,q.context);
  assert.equal(wrong.isCorrect,false);assert.equal(right.isCorrect,true);
  assert.deepEqual(wrong.scene,q.scene);assert.deepEqual(right.scene,core.correctedScene(q));
  assert.match(wrong.answer,/^Incorrect\. /);assert.match(right.answer,/^Correct\. /);
 }
});
test('saved mistake IDs survive the new deck and correct cards can be saved',()=>{
 const flash=require('../site/flashcards-core.js');
 const known=new Set(deck.map(q=>q.id));
 const restored=flash.restore(JSON.stringify({version:1,flags:{'class-inheritance':'incorrect','class-inheritance-correct':'skipped','unknown':'incorrect'}}),known);
 assert.deepEqual({...restored},{'class-inheritance':'incorrect','class-inheritance-correct':'skipped'});
});
test('diagram page exposes type-only browsing and self-assessment instead of hotspots',()=>{
 const html=readFileSync('site/diagrams.html','utf8'),renderer=readFileSync('site/diagrams-render.js','utf8');
 assert.ok(html.includes('id="dg-family"'));assert.ok(html.includes('Is this diagram correct?'));
 assert.doesNotMatch(html,/navigation\.js|course-topics\.js|dg-navigation|Element buttons|Tap the incorrect/);
 assert.doesNotMatch(renderer,/addEventListener|role.*button|tabindex|identified|label-hit/);
 for(const id of ['dg-answer','dg-source-wrap','dg-correct','dg-incorrect','dg-next'])assert.match(html,new RegExp('hidden id="'+id+'"'));
});
test('corrections are nonempty, deterministic and do not mutate the original',()=>{
 for(const q of cases){const before=JSON.stringify(q.scene),fixed=core.correctedScene(q);assert.notDeepEqual(fixed,q.scene);assert.equal(JSON.stringify(q.scene),before);assert.deepEqual(fixed,core.correctedScene(q));}
});
test('specific fixes preserve the source rule and scenario',()=>{
 const corrected=id=>core.correctedScene(cases.find(q=>q.id===id));
 assert.equal(corrected('class-inheritance').edges[0].direction,'right');
 assert.equal(corrected('class-composition').edges[0].direction,'left');
 assert.equal(corrected('class-multiplicity').edges[0].multiplicity[1].text,'1..*');
 assert.equal(corrected('object-owner').edges[1].hidden,true);
 assert.equal(corrected('ccd-navigability').edges[0].direction,'none');
 assert.equal(corrected('sequence-order').edges[2].label,'find()');
 assert.equal(corrected('sequence-deletion').edges[2].hidden,true);
 assert.equal(corrected('activity-join').shapes[4].type,'bar');
 assert.equal(corrected('activity-swimlane').shapes[2].x,600);
 assert.equal(corrected('architecture-name').nodes[1].title,'Storage');
});
test('correction paths cannot access prototypes or create unknown fields',()=>{
 for(const path of ['nodes.0.__proto__.polluted','nodes.0.constructor.prototype','nodes.0.unknown','bogus.0.x'])assert.throws(()=>core.correctedScene({...cases[0],fixes:[{path,value:true}]}));
 assert.equal({}.polluted,undefined);
});
