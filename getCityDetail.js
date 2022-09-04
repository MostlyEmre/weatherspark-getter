import config from "./config.js";
import prepareSVG from "./prepareSVG.js";
import svgtopng from "./svgtopng.js";

export default async function (cityURL) {
  const corsProxy = config.corsProxy;
  const coreURL = `https://weatherspark.com${cityURL}`;
  const url = corsProxy + coreURL;

  const parser = new DOMParser();

  return fetch(url, {
    headers: {
      accept: "application/json",
    },
  })
    .then((response) => response.text())
    .then((text) => parser.parseFromString(text, "text/html"))
    .then((doc) => {
      const theParent = doc.querySelectorAll(".Figure-title");
      let relevantParent;
      theParent.forEach((title) => {
        if (title.textContent.includes("Average Hourly Temperature")) {
          relevantParent = title.parentElement;
        }
      });

      const childSVG = relevantParent.querySelector("svg");

      infographic.innerHTML = childSVG.outerHTML;
      prepareSVG();
      document.querySelector("#search-results").style.display = "none";
      svgtopng();
    })
    .catch((error) => {
      console.log(error);
    });
}
