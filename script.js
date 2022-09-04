// APIs to use:
// fetch
// DOMParser()
// decodeURIComponent()
import svgtopng from "./svgtopng.js";
import config from "./config.js";
import getCity from "./getCity.js";
import getCityDetail from "./getCityDetail.js";
import prepareSVG from "./prepareSVG.js"; // prepares the SVG

// elements
const cityInput = document.querySelector("#city");
const srcResults = document.querySelector("#search-results");
const infographic = document.querySelector("#infographic");

const div = document.createElement("div");

// log the changes on cityInput
cityInput.addEventListener("input", () => {
  srcResults.style.display = "flex";
  organize();
});

prepareSVG();

// Creates search results section
async function organize() {
  srcResults.innerHTML = "";
  const results = await getCity(cityInput.value);
  results.forEach((r) => {
    if (!r.url.includes("countries")) {
      let id = r.url.split("/")[2];
      srcResults.innerHTML += `<div id="id-${id}" data-url="${r.url}" class="result">${r.city}</div>`;
    }
  });
  document.querySelectorAll(".result").forEach((r) => {
    r.addEventListener("click", () => getCityDetail(r.dataset.url));
  });
}
