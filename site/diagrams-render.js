(function (root) {
  'use strict';
  const ns = 'http://www.w3.org/2000/svg';
  function el(tag, attributes = {}, text) {
    const node = document.createElementNS(ns, tag);
    for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, String(value));
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function render(scene, choose, enabled = true, identified = []) {
    const svg = el('svg', {viewBox: '0 0 800 520', class: 'diagram-svg', role: 'group', 'aria-label': 'Practice diagram. Select an element or use the element buttons below.'});
    // Trim empty vertical canvas space without moving any diagram element.
    const bounds=[];
    scene.nodes.filter(item=>!item.hidden).forEach(item=>bounds.push(item.y-10,item.y+item.h+10));
    scene.edges.filter(item=>!item.hidden).forEach(item=>bounds.push(Math.min(item.y1,item.y2)-35,Math.max(item.y1,item.y2)+30));
    scene.shapes.filter(item=>!item.hidden).forEach(item=>bounds.push(item.type==='frame'?item.y-10:item.y-Math.max(item.h/2,35),item.type==='frame'?item.y+item.h+10:item.y+Math.max(item.h/2,35)));
    scene.texts.forEach(item=>bounds.push(item.y-25,item.y+15));
    const top=Math.max(0,Math.min(...bounds)-20),bottom=Math.max(...bounds)+20;
    const narrow=scene.nodes.filter(item=>!item.hidden).length===1&&!scene.edges.some(item=>!item.hidden)&&!scene.shapes.some(item=>!item.hidden);
    const only=scene.nodes.find(item=>!item.hidden);
    svg.setAttribute('viewBox',`${narrow?only.x-40:0} ${top} ${narrow?only.w+80:800} ${bottom-top}`);
    if(narrow)svg.classList.add('narrow');
    const labels = [];
    function part(id, label, description = label) {
      const group = el('g', {class: 'diagram-part' + (identified.includes(id) ? ' identified' : ''), 'data-part': id});
      labels.push({id, label, description});
      if (enabled) {
        group.setAttribute('role', 'button'); group.setAttribute('tabindex', '0'); group.setAttribute('aria-label', description);
        group.addEventListener('click', () => choose(id));
        group.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); choose(id); } });
      }
      svg.append(group); return group;
    }
    function text(group, x, y, value, classes = '') {
      const lines = String(value).split('\n');
      lines.forEach((line, index) => group.append(el('text', {x, y: y + index * 24, class: 'diagram-text ' + classes, 'text-anchor': 'middle'}, line)));
    }
    function arrow(group, x, y, towardX, towardY, kind) {
      const angle = Math.atan2(y - towardY, x - towardX), ux = Math.cos(angle), uy = Math.sin(angle), nx = -uy, ny = ux;
      const back = kind === 'inheritance' ? 25 : 17;
      if (kind === 'composition') {
        const points = [[x,y],[x-ux*17+nx*9,y-uy*17+ny*9],[x-ux*34,y-uy*34],[x-ux*17-nx*9,y-uy*17-ny*9]];
        group.append(el('polygon', {points: points.map(point => point.join(',')).join(' '), class: 'arrow-filled'}));
      } else {
        const points = [[x,y],[x-ux*back+nx*10,y-uy*back+ny*10],[x-ux*back-nx*10,y-uy*back-ny*10]];
        group.append(el('polygon', {points: points.map(point => point.join(',')).join(' '), class: kind === 'inheritance' ? 'arrow-hollow' : 'arrow-filled'}));
      }
    }
    function attach(x, y, towardX, towardY) {
      const control = scene.shapes.find(shape => ['decision','bar','initial'].includes(shape.type)
        && Math.abs(x-shape.x) <= Math.max(shape.w/2,35)+12 && Math.abs(y-shape.y) <= 38);
      if (!control) return {x,y};
      const dx=towardX-control.x,dy=towardY-control.y;
      if (!dx && !dy) return {x,y};
      let ratio;
      if (control.type==='decision') ratio=1/(Math.abs(dx)/42+Math.abs(dy)/30);
      else if (control.type==='initial') ratio=12/Math.hypot(dx,dy);
      else ratio=Math.min(dx?control.w/2/Math.abs(dx):Infinity,dy?7/Math.abs(dy):Infinity);
      return {x:control.x+dx*ratio,y:control.y+dy*ratio};
    }
    for (const [edgeIndex, original] of scene.edges.filter(item => !item.hidden).entries()) {
      const start=attach(original.x1,original.y1,original.x2,original.y2);
      const end=attach(original.x2,original.y2,original.x1,original.y1);
      const edge={...original,x1:start.x,y1:start.y,x2:end.x,y2:end.y};
      const nearest=(x,y)=>[...scene.nodes].filter(node=>!node.hidden).sort((a,b)=>Math.hypot(x-a.x-a.w/2,y-a.y-a.h/2)-Math.hypot(x-b.x-b.w/2,y-b.y-b.h/2))[0]?.title || 'control node';
      const from=nearest(edge.x1,edge.y1),to=nearest(edge.x2,edge.y2);
      const target=edge.direction==='left'?from:to;
      const notation=edge.kind==='inheritance'?'hollow triangle at '+target:edge.kind==='composition'?'filled diamond at '+target:
        edge.kind==='lifeline'?'dashed lifeline':(edge.kind==='dashed'?'dashed line':'solid line')+(edge.direction==='none'?', no arrowhead':edge.direction==='both'?', arrowheads at both ends':', arrowhead at '+target);
      const label=edge.label?'Message: '+edge.label:'Connection '+(edgeIndex+1);
      const group=part(edge.id,label,label+', from '+from+' to '+to+', '+notation);
      const angle=Math.atan2(edge.y2-edge.y1,edge.x2-edge.x1)*180/Math.PI;
      group.append(el('rect', {x:edge.x1,y:edge.y1-28,width:Math.hypot(edge.x2-edge.x1,edge.y2-edge.y1),height:56,transform:`rotate(${angle} ${edge.x1} ${edge.y1})`,class:'label-hit'}));
      group.append(el('line', {x1: edge.x1, y1: edge.y1, x2: edge.x2, y2: edge.y2,
        class: 'diagram-line' + (['dashed','lifeline'].includes(edge.kind) ? ' dashed' : '')}));
      if (edge.direction === 'right' || edge.direction === 'both') arrow(group, edge.x2, edge.y2, edge.x1, edge.y1, edge.kind);
      if (edge.direction === 'left' || edge.direction === 'both') arrow(group, edge.x1, edge.y1, edge.x2, edge.y2, edge.kind);
      if (edge.label) text(group, (edge.x1 + edge.x2) / 2, (edge.y1 + edge.y2) / 2 - 14, edge.label, 'edge-label');
      for (const count of edge.multiplicity) {
        const countGroup = part(count.id, 'Multiplicity: ' + count.text);
        countGroup.append(el('rect', {x: count.x-37, y:count.y-31, width:74, height:56, class:'label-hit'}));
        text(countGroup, count.x, count.y, count.text);
      }
    }
    for (const node of scene.nodes.filter(item => !item.hidden)) {
      svg.append(el('rect', {x: node.x, y: node.y, width: node.w, height: node.h, class: 'diagram-box'}));
      const underline = node.underlineTitle === undefined ? node.object : node.underlineTitle;
      const header = part(node.id, 'Heading: ' + node.title, 'Heading '+node.title+(underline?', underlined':', not underlined'));
      header.append(el('rect', {x:node.x, y:node.y, width:node.w, height:56, class:'label-hit'}));
      text(header, node.x + node.w/2, node.y + 36, node.title, underline ? 'underlined' : '');
      if (node.rows.some(row => !row.hidden)) svg.append(el('line', {x1:node.x, x2:node.x+node.w, y1:node.y+55, y2:node.y+55, class:'diagram-line'}));
      node.rows.filter(row => !row.hidden).forEach((row, index) => {
        const group = part(row.id, 'Slot or member: ' + row.text, row.text+(row.underlined?', underlined':', not underlined'));
        group.append(el('rect', {x:node.x, y:node.y+56+index*58, width:node.w, height:58, class:'label-hit'}));
        text(group, node.x+node.w/2, node.y+90+index*58, row.text, row.underlined ? 'underlined' : '');
      });
    }
    for (const [shapeIndex,shape] of scene.shapes.filter(item => !item.hidden).entries()) {
      const group = part(shape.id, shape.label ? 'Element: ' + shape.label.replaceAll('\n', '; ') : 'Control node ' + (shapeIndex+1), (shape.label||'Control node '+(shapeIndex+1))+', '+(shape.type==='decision'?'diamond':shape.type==='initial'?'filled circle':shape.type));
      const x=shape.x,y=shape.y,w=shape.w,h=shape.h;
      if (shape.type==='decision') group.append(el('polygon',{points:`${x},${y-30} ${x+42},${y} ${x},${y+30} ${x-42},${y}`,class:'diagram-box'}));
      else if (shape.type==='bar') group.append(el('rect',{x:x-w/2,y:y-7,width:w,height:14,class:'control-filled'}));
      else if (shape.type==='initial') group.append(el('circle',{cx:x,cy:y,r:12,class:'control-filled'}));
      else if (shape.type==='cross') {
        group.append(el('line',{x1:x-16,y1:y-16,x2:x+16,y2:y+16,class:'diagram-line'}));
        group.append(el('line',{x1:x-16,y1:y+16,x2:x+16,y2:y-16,class:'diagram-line'}));
      } else if (shape.type==='frame') {
        svg.append(el('rect',{x,y,width:w,height:h,class:'frame-box'}));
        group.append(el('rect',{x,y,width:w,height:56,class:'label-hit'}));
        text(group,x+w/2,y+30,shape.label);
      } else if (shape.type==='lane') {
        group.append(el('rect',{x:x-w/2,y:y-h/2,width:w,height:h,class:'lane-box'}));
        text(group,x,y-h/2+32,shape.label);
      } else {
        group.append(el('rect',{x:x-w/2,y:y-h/2,width:w,height:h,rx:shape.type==='action'?12:0,class:'diagram-box'}));
        text(group,x,y+(shape.label.includes('\n')?-8:6),shape.label);
      }
      if (['decision','bar','initial','cross'].includes(shape.type)) group.append(el('rect',{x:x-Math.max(w,64)/2,y:y-32,width:Math.max(w,64),height:64,class:'label-hit'}));
    }
    for (const item of scene.texts) text(svg,item.x,item.y,item.text,'legend-text');
    return {svg, labels};
  }
  root.DiagramRenderer = {render};
})(globalThis);
