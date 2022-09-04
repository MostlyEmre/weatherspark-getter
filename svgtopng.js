const download = function (href, name) {
  const link = document.createElement("a");
  link.download = name;
  link.innerText = "Download as PNG";
  // link.style.opacity = "1";
  document.querySelector(".download").append(link);
  link.href = href;
  // link.click();
  // link.remove();
};

export default function () {
  const svg = document.querySelector("svg");
  let clonedSVG = svg.cloneNode(true);
  let outerHTML = clonedSVG.outerHTML;
  let blob = new Blob([outerHTML], { type: "image/svg+xml;charset=utf-8" });
  let blobURL = URL.createObjectURL(blob);

  let image = new Image();
  image.src = blobURL;

  let canvas = document.createElement("canvas");

  image.onload = () => {
    canvas.width = svg.clientWidth;
    canvas.height = svg.clientHeight;
    canvas.getContext("2d").drawImage(image, 0, 0, svg.clientWidth, svg.clientHeight);
    download(canvas.toDataURL("image/png"), `${Date.now()}.png`);
  };
}
