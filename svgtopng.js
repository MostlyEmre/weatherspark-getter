export default function () {
  const svg = document.querySelector("svg");

  // convert svg to text

  let s = new XMLSerializer();
  let svgStr = s.serializeToString(svg);
  console.log(svgStr);
}
