(function (root) {
  'use strict';
  const ns = 'http://www.w3.org/2000/svg';
  let serial = 0;
  function render(picture) {
    // The viewport focuses an original worksheet panel; it never redraws
    // the course diagram or changes its source pixels.
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', picture.view.join(' '));
    svg.setAttribute('class', 'diagram-svg source-diagram' + (picture.view[2] < 550 ? ' narrow' : ''));
    svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', picture.alt);
    // Clip the selected panel itself, including letterboxed SVG space.
    const defs = document.createElementNS(ns, 'defs');
    const clip = document.createElementNS(ns, 'clipPath');
    const clipId = 'course-panel-' + (++serial); clip.setAttribute('id', clipId);
    const rectangle = document.createElementNS(ns, 'rect');
    ['x', 'y', 'width', 'height'].forEach((name, index) => rectangle.setAttribute(name, String(picture.view[index])));
    clip.append(rectangle); defs.append(clip); svg.append(defs);
    const image = document.createElementNS(ns, 'image');
    image.setAttribute('clip-path', 'url(#' + clipId + ')');
    image.setAttribute('href', picture.asset);
    image.setAttribute('width', String(picture.width)); image.setAttribute('height', String(picture.height));
    svg.append(image);
    return {svg};
  }
  root.DiagramRenderer = {render};
})(globalThis);
