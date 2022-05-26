// APIs to use:
// fetch
// DOMParser()
// decodeURIComponent()
const corsProxy = "https://xmrdca.emree.workers.dev/corsproxy/?apiurl=";
const coreURL = "https://weatherspark.com/y/32022/Average-Weather-in-Lisbon-Portugal-Year-Round";

const parser = new DOMParser();

const url = corsProxy + coreURL;

fetch(url)
  .then((response) => {
    return response.text();
  })
  .then((text) => parser.parseFromString(text, "text/html"))
  .then((doc) => {
    // console.log(doc.querySelector("#Download-previewImage").innerHTML);
    console.log(doc.querySelectorAll(".Figure-chart")[2].innerHTML);
  })
  .catch((error) => {
    console.log(error);
  });

// the solution is to reconstruct the svg.

// class = Figure-HorizontalAxis-group
// remove that class, keep the text inside. remove the rectangle too.

// function a(e) {
//   let s = $(e.currentTarget),
//     i = s.closest(Css.Figure.wrapper.css()),
//     a = i.find(Css.Figure.title.css()),
//     c = i.find("svg");
//   if (1 == c.length && 1 == a.length) {
//     let e = c.find("title").text() || a[0].innerText;
//     (r = s.data("target") || e), Util.gaTrack("Download", "Show", r);
//     let i = c[0].outerHTML,
//       l = i.match(/viewBox="0 0 (\d+) (\d+)"/) || [];
//     (t = parseInt(l[1])), (n = parseInt(l[2]));
//     let h = $(i);
//     t && n && h.attr("width", t + "px").attr("height", n + "px"),
//       h.find(Css.now.css()).remove(),
//       h.find("*").removeAttr("pointer-events").removeAttr("class"),
//       h.find("a").removeAttr("xlink:href").removeAttr("href");
//     let d = h[0].outerHTML.replace(/<a/g, "<g").replace(/<\/a>/g, "</g>"),
//       u = "data:image/svg+xml," + encodeURIComponent(d);
//     Css.Download.title.$().text(e),
//       Css.Download.previewImage.$().attr("src", u).attr("title", e),
//       (o.src = u),
//       Css.Download.downloadSvg
//         .$()
//         .attr("href", u)
//         .attr("download", e + ".svg"),
//       Css.Download.downloadPng.$().attr("download", e + ".png"),
//       Css.Download.downloadLargePng.$().attr("download", e + " 2x.png"),
//       Css.Download.modal.$().modal();
//   }
//   return !1;
// }
