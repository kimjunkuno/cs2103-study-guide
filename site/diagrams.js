(function () {
  'use strict';
  const $=id=>document.getElementById(id), cases=DIAGRAM_QUESTIONS.cases;
  const known=new Set(cases.map(item=>item.id)), key='cs2103-diagrams-v1';
  let flags=Object.create(null), seen=new Set(), current=null, finished=false, hadMiss=false, fixed=false;
  try { const stored=localStorage.getItem(key); if(stored) flags=FlashcardCore.restore(stored,known); } catch(error) { $('dg-message').textContent='Saved practice could not be read. You can still practise.'; }
  const navigation=CourseNavigation.mount($('dg-navigation'),cases,restart);
  function persist(){try{localStorage.setItem(key,JSON.stringify({version:1,flags}));}catch(error){$('dg-message').textContent='Storage unavailable. Progress lasts for this visit only.';}}
  function pool(){return cases.filter(item=>navigation.matches(item)&&(!$('dg-revisit').checked||flags[item.id])&&(!$('dg-family').value||item.family===$('dg-family').value));}
  function stats(){ $('dg-count').textContent=pool().length+' exercises · '+Object.keys(flags).length+' saved'; }
  function render(){
    if(!current)return;
    const scene=fixed?DiagramCore.correctedScene(current):current.scene;
    const result=DiagramRenderer.render(scene,choose,!finished,finished?current.answerIds:[]);
    $('dg-canvas').replaceChildren(result.svg);
    $('dg-elements').replaceChildren();
    for(const item of result.labels){const button=document.createElement('button');button.type='button';button.textContent=item.label;button.setAttribute('aria-label',item.description);button.disabled=finished;button.addEventListener('click',()=>choose(item.id));$('dg-elements').append(button);}
    if($('dg-dialog').open){const enlarged=DiagramRenderer.render(scene,choose,!finished,finished?current.answerIds:[]);$('dg-dialog-canvas').replaceChildren(enlarged.svg);$('dg-dialog-feedback').textContent=$('dg-feedback').textContent;}
    $('dg-fix').hidden=!finished;$('dg-fix').textContent=fixed?'Show mistake':'Show correction';
    $('dg-source-wrap').hidden=!finished;
  }
  function choose(id){
    if(!current||finished)return;
    if(DiagramCore.assess(current,id)){
      finished=true;
      if(!hadMiss)delete flags[current.id];
      $('dg-feedback').textContent='Correct. '+current.explanation;
    }else{
      hadMiss=true;flags[current.id]='incorrect';$('dg-feedback').textContent='Not this element. Try again, or show the answer. Saved for later.';
    }
    persist();stats();render();
    const feedback=$('dg-dialog').open?$('dg-dialog-feedback'):$('dg-feedback');
    if(finished)feedback.focus({preventScroll:true});
    else $('dg-canvas').querySelector('[data-part="'+id+'"]')?.focus({preventScroll:true});
  }
  function next(){
    current=FlashcardCore.pick(pool(),seen,$('dg-repeats').checked,current&&current.id);
    $('dg-exercise').hidden=!current;$('dg-empty').hidden=Boolean(current);
    if(current){seen.add(current.id);finished=false;hadMiss=false;fixed=false;$('dg-context').textContent=current.context;$('dg-topic').textContent=current.topicId+' · '+current.family;$('dg-feedback').textContent='';$('dg-rule').textContent=current.rule;$('dg-source').href=current.source;$('dg-guide').href='./index.html#'+encodeURIComponent(current.topicId);$('dg-source-wrap').open=false;render();}
    else $('dg-empty').textContent=pool().length?'Set complete. Restart or allow repeats.':'No exercises match. Change the filters or switch off Revisit only.';
    stats();
  }
  function restart(){seen=new Set();next();}
  $('dg-family').addEventListener('change',restart);$('dg-revisit').addEventListener('change',restart);$('dg-repeats').addEventListener('change',()=>{if(!current)next();else stats();});
  $('dg-next').addEventListener('click',next);$('dg-restart').addEventListener('click',restart);
  $('dg-skip').addEventListener('click',()=>{if(current){if(!flags[current.id])flags[current.id]='skipped';persist();}next();});
  $('dg-answer').addEventListener('click',()=>{if(!current)return;flags[current.id]='incorrect';hadMiss=true;finished=true;fixed=true;$('dg-feedback').textContent=current.explanation;persist();stats();render();});
  $('dg-fix').addEventListener('click',()=>{fixed=!fixed;render();});
  $('dg-enlarge').addEventListener('click',()=>{if(!current)return;const result=DiagramRenderer.render(fixed?DiagramCore.correctedScene(current):current.scene,choose,!finished,finished?current.answerIds:[]);$('dg-dialog-canvas').replaceChildren(result.svg);$('dg-dialog-feedback').textContent=$('dg-feedback').textContent;$('dg-dialog').showModal();});
  $('dg-close').addEventListener('click',()=>$('dg-dialog').close());
  $('dg-export').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({version:1,flags},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='cs2103-diagram-revisit.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
  $('dg-import').addEventListener('click',()=>$('dg-file').click());
  $('dg-file').addEventListener('change',async event=>{try{const file=event.target.files[0];if(!file||file.size>2*1024*1024)throw new Error();const nextFlags=FlashcardCore.restore(await file.text(),known);flags=nextFlags;persist();restart();$('dg-message').textContent='Revisit list imported.';}catch(error){$('dg-message').textContent='Invalid backup. Your list is unchanged.';}finally{$('dg-file').value='';}});
  window.addEventListener('storage',event=>{if(event.key!==key)return;try{flags=event.newValue?FlashcardCore.restore(event.newValue,known):Object.create(null);restart();}catch(error){$('dg-message').textContent='An invalid storage update was ignored.';}});
  next();
})();
