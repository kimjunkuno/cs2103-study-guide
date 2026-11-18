const {test}=require('node:test');
const assert=require('node:assert/strict');
const state=require('../site/study-state.js');
function storage(){
 const values=new Map();
 return {values,getItem:key=>values.get(key)||null,setItem:(key,value)=>values.set(key,value)};
}
const defaults={mode:'textbook',week:'',search:'',revisit:false};
const choices={mode:['textbook','week'],week:['','4','8']};
test('filter memory survives a new page instance and keeps each page separate',()=>{
 const disk=storage();
 state.remember('guide',defaults,choices,disk).save({mode:'week',week:'8',search:'constraints'});
 assert.deepEqual(state.remember('guide',defaults,choices,disk).read(),{mode:'week',week:'8',search:'constraints',revisit:false});
 assert.deepEqual(state.remember('flashcards',defaults,choices,disk).read(),defaults);
 state.remember('guide',defaults,choices,disk).save({week:'',search:''});
 assert.equal(state.remember('guide',defaults,choices,disk).read().search,'');
});
test('saved false checkbox values override a previously saved true value',()=>{
 const disk=storage(),memory=state.remember('guide',defaults,choices,disk);
 memory.save({revisit:true});memory.save({revisit:false});
 assert.equal(state.remember('guide',defaults,choices,disk).read().revisit,false);
});
test('invalid options, oversized text and unexpected keys cannot become filters',()=>{
 const malicious=JSON.parse('{"mode":"admin","week":"99","search":"ok","revisit":"false","__proto__":{"polluted":true},"endpoint":"https://example.com"}');
 assert.deepEqual(state.clean(malicious,defaults,choices),{...defaults,search:'ok'});
 assert.deepEqual(state.clean({...malicious,search:'x'.repeat(501)},defaults,choices),defaults);
 assert.equal({}.polluted,undefined);
});
test('malformed, oversized and future-version storage falls back to defaults',()=>{
 const disk=storage();
 for(const raw of ['{','null','[]','x'.repeat(10001),JSON.stringify({version:2,values:{mode:'week'}})]){
  disk.values.set('cs2103-view-guide-v1',raw);
  assert.deepEqual(state.remember('guide',defaults,choices,disk).read(),defaults);
 }
});
test('blocked storage does not stop browsing or changing selections',()=>{
 const disk={getItem(){throw new Error('blocked')},setItem(){throw new Error('blocked')}};
 const memory=state.remember('guide',defaults,choices,disk);
 assert.deepEqual(memory.read(),defaults);
 assert.doesNotThrow(()=>memory.save({week:'8'}));assert.equal(memory.read().week,'8');
});
