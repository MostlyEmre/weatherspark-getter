export default function () {
  // elements to be removed or guide the removal
  const svg = document.querySelector("svg");
  const hours = svg.querySelector("g:nth-child(18)");
  const horizontalAxisGroup = svg.querySelectorAll(".Figure-HorizontalAxis-group");
  const hoverRectangles = svg.querySelectorAll(".Figure-hoverRect");
  const nowLineAndText = svg.querySelectorAll(".now");
  const lines = svg.querySelector(".pointer_events_none");
  const defs = svg.querySelector("defs");

  defs.remove();

  hoverRectangles.forEach((rect) => {
    rect.remove();
  });

  nowLineAndText.forEach((n) => n.remove());
  svg.removeChild(hours);

  // moves inner month text outside of the parent. and removes the link.
  horizontalAxisGroup.forEach((h) => {
    h.outerHTML = h.innerHTML;
    h.remove();
  });

  lines.remove();

  const g = svg.querySelectorAll("g");

  // remove every g element after the first g element.
  for (let i = 1; i < g.length; i++) {
    g[i].remove();
  }
}
