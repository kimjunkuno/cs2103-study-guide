const {test}=require('node:test');
const assert=require('node:assert/strict');
const {readFileSync}=require('node:fs');
const nav=require('../site/navigation.js');
const data=JSON.parse(readFileSync('site/course-topics.js','utf8').replace('globalThis.COURSE_TOPICS = ','').replace(/;\s*$/,''));
test('every original topic has a textbook home and an unchanged ID',()=>{
 const original=JSON.parse(readFileSync('CONTENT_SOURCES.json','utf8')).topics;
 assert.deepEqual(data.topics.map(t=>t.id),original.map(t=>t.id));
 for(const t of data.topics)assert.ok(data.categories.some(c=>c.label===t.category&&c.chapters.includes(t.chapter)));
});
test('numeric topic order is natural, including subtopics',()=>{
 assert.deepEqual(['W10.1','W2.10','W2.2','W4.2b','W4.2a'].sort(nav.compareIds),['W2.2','W2.10','W4.2a','W4.2b','W10.1']);
});
test('textbook filters combine category, chapter and canonical topic',()=>{
 const t=data.topics.find(t=>t.id==='W6.1a');
 assert.ok(nav.matches(t,{mode:'textbook',category:'Design',chapter:'Modeling (Using UML)',topic:t.topicKey}));
 assert.ok(!nav.matches(t,{mode:'textbook',category:'Implementation'}));
});
test('revisited topics share a topic key but retain both week references',()=>{
 const a=data.topics.find(t=>t.id==='W4.2b'),b=data.topics.find(t=>t.id==='W8.1a');
 assert.equal(a.topicKey,b.topicKey);assert.notEqual(a.id,b.id);
 assert.ok(nav.matches(a,{mode:'textbook',topic:a.topicKey}));assert.ok(nav.matches(b,{mode:'textbook',topic:a.topicKey}));
 assert.ok(!nav.matches(a,{mode:'week',week:'8'}));assert.ok(nav.matches(b,{mode:'week',week:'8'}));
});
test('Guide results contain one copy of every audited repeated topic',()=>{
 const unique=nav.uniqueTopics(data.topics,data);
 assert.equal(unique.length,309);
 assert.equal(unique.filter(t=>t.topicKey===data.topics.find(t=>t.id==='W4.2b').topicKey).length,1);
 assert.ok(unique.some(t=>t.id==='W4.2b'));
 assert.ok(!unique.some(t=>t.id==='W8.1a'));
 // Similar titles in different topics must not be collapsed.
 assert.ok(unique.some(t=>t.id==='W1.1h'));
 assert.ok(unique.some(t=>t.id==='W1.1i'));
});
test('Guide consolidation runs after week filtering and preserves each assignment',()=>{
 for(const [week,count] of [[2,13],[4,24],[6,17],[8,29],[9,32]]){
  const matching=data.topics.filter(t=>nav.matches(t,{mode:'week',week:String(week)}));
  assert.equal(nav.uniqueTopics(matching,data).length,count);
 }
 const week8=data.topics.filter(t=>nav.matches(t,{mode:'week',week:'8'}));
 assert.ok(nav.uniqueTopics(week8,data).some(t=>t.id==='W8.1a'));
 const topic=data.topics.find(t=>t.id==='W8.1a');
 assert.equal(nav.uniqueTopics(data.topics.filter(t=>nav.matches(t,{mode:'textbook',topic:topic.topicKey})),data).length,1);
});
test('practice selectors expose only topics with available questions',()=>{
 const available=nav.available(data,[{topicId:'W6.1a'},{topicId:'W6.1a'}]);
 assert.deepEqual(available.map(t=>t.id),['W6.1a']);
 assert.ok(!nav.matches(available[0],{mode:'week',week:'12'}));
});
test('switching browse modes keeps a compatible selected topic and week',()=>{
 const topic=data.topics.find(t=>t.id==='W8.1a');
 const book=nav.switchMode({mode:'week',week:'8',topic:topic.topicKey},'textbook',data.topics);
 assert.equal(book.category,'Design');assert.equal(book.chapter,'Modeling (Using UML)');
 const week=nav.switchMode(book,'week',data.topics);assert.equal(week.week,'8');assert.equal(week.topic,topic.topicKey);
 const empty=nav.switchMode({mode:'week',week:'12',topic:''},'textbook',data.topics);assert.equal(empty.topic,'');
});
