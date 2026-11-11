const {test}=require('node:test'),assert=require('node:assert/strict'),{readFileSync,existsSync}=require('node:fs'),{createHash}=require('node:crypto');
const data=JSON.parse(readFileSync('site/diagrams-data.js','utf8').replace('globalThis.DIAGRAM_QUESTIONS = ','').replace(/;\s*$/,''));
const cards=data.cards,sources=JSON.parse(readFileSync('DIAGRAM_SOURCES.json','utf8')).assets;
const flash=require('../site/flashcards-core.js');
test('36 course-image cards cover required families with correct and incorrect examples',()=>{
 assert.equal(cards.length,36);assert.equal(new Set(cards.map(c=>c.id)).size,cards.length);
 assert.deepEqual([...new Set(cards.map(c=>c.family))].sort(),['activity','architecture','class','conceptual','object','sequence']);
 for(const family of new Set(cards.map(c=>c.family))){const subset=cards.filter(c=>c.family===family);assert.ok(subset.some(c=>c.isCorrect));assert.ok(subset.some(c=>!c.isCorrect));}
 for(const c of cards){assert.equal(c.optional,false);assert.match(c.topicId,/^W[469]\./);assert.ok(c.answer.startsWith(c.isCorrect?'Correct.':'Incorrect.'));assert.doesNotMatch(c.context,/\b(wrong|incorrect|error|mistake|arrow|guard|rectangle)\b/i);}
});
test('every displayed panel has a local original course asset and valid bounds',()=>{
 for(const c of cards){
  assert.match(c.source,/^https:\/\/nus-cs2103-ay2627-s1.github.io\/website\/schedule\/week[469]\/topics.html#/);
  assert.match(c.bookSource,/^https:\/\/nus-cs2103-ay2627-s1.github.io\/website\/book\//);
  for(const image of [c.image,c.reference].filter(Boolean)){
   assert.match(image.asset,/^\.\/(?:diagram-assets\/[a-f0-9]{24}\.png|assets\/[a-f0-9]{24}\.svg)$/);
   assert.ok(existsSync('site/'+image.asset.slice(2)));
   assert.ok(image.alt);assert.doesNotMatch(image.alt,/incorrect|mistake|wrong|error|correct/i);
   const source=sources.find(s=>s.asset===image.asset);assert.ok(source);assert.equal(source.source,image.source);
   assert.equal(image.width,source.width);assert.equal(image.height,source.height);
   const [x,y,w,h]=image.view;assert.ok(image.view.every(Number.isInteger));assert.ok(x>=0&&y>=0&&w>0&&h>0&&x+w<=image.width&&y+h<=image.height);
  }
 }
 for(const source of sources){const bytes=readFileSync('site/'+source.asset.slice(2));assert.equal(createHash('sha256').update(bytes).digest('hex'),source.sha256);}
});
test('course exercise classifications retain the published answers',()=>{
 const expected={class:[false,false,true,true,true],linear:[true,false,false,true,false],alternate:[true,true,true,false,true,false],parallel:[true,false,false,true]};
 for(const [group,values] of Object.entries(expected))values.forEach((value,i)=>{
  const id=group==='class'?'course-class-compartments-'+(i+1):'course-activity-'+group+'-'+(i+1);
  assert.equal(cards.find(c=>c.id===id).isCorrect,value,id);
 });
 assert.equal(cards.find(c=>c.id==='course-conceptual-player-turn').isCorrect,false);
 assert.equal(cards.find(c=>c.id==='course-architecture-2').isCorrect,false);
});
test('no-repeat selection exhausts the source deck without recycling',()=>{
 const seen=new Set();for(let i=0;i<cards.length;i++){const c=flash.pick(cards,seen,false,null,()=>0);assert.ok(c);assert.ok(!seen.has(c.id));seen.add(c.id);}assert.equal(flash.pick(cards,seen,false,null),null);
});
test('course revisit imports cannot attach old exercises or unknown IDs to new cards',()=>{
 const flags=flash.restore(JSON.stringify({version:1,flags:{'course-activity-linear-1':'incorrect','class-inheritance':'incorrect','unknown':'skipped'}}),new Set(cards.map(c=>c.id)));
 assert.deepEqual({...flags},{'course-activity-linear-1':'incorrect'});
});
test('passive course images replace the generated diagram model',()=>{
 const html=readFileSync('site/diagrams.html','utf8'),renderer=readFileSync('site/diagrams-render.js','utf8');
 assert.ok(html.includes('id="dg-family"'));assert.ok(html.includes('Is this diagram correct?'));
 assert.doesNotMatch(html,/diagrams-core\.js|navigation\.js|course-topics\.js|dg-navigation|Element buttons/);
 assert.doesNotMatch(renderer,/addEventListener|role.*button|tabindex|identified|label-hit/);
 assert.ok(renderer.includes("createElementNS(ns, 'image')"));
 for(const id of ['dg-answer','dg-source-wrap','dg-correct','dg-incorrect','dg-next'])assert.match(html,new RegExp('hidden id="'+id+'"'));
});
test('outcome classes provide green/red answer and self-assessment states',()=>{
 const css=readFileSync('site/diagrams.css','utf8'),script=readFileSync('site/diagrams.js','utf8');
 assert.match(css,/#dg-correct\{background:#235c47/);assert.match(css,/#dg-incorrect\{background:#b42318/);
 assert.match(css,/#dg-answer\.is-correct/);assert.match(css,/#dg-answer\.is-incorrect/);
 assert.ok(script.includes("classList.toggle('is-correct', current.isCorrect)"));assert.ok(script.includes("classList.toggle('is-incorrect', !current.isCorrect)"));
});
