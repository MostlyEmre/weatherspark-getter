import config from "./config.js";

export default async function (city) {
  const corsProxy = config.corsProxy;
  const coreURL = `https://weatherspark.com/search?q=${city}&ic=false&c=0&p=1`;
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
      const results = [];
      doc.querySelectorAll(".Search-Result-title").forEach((link) => {
        results.push({
          city: link.innerText,
          url: link.href.replace("http://127.0.0.1:5500", ""),
        });
      });
      console.log(results);
      return results;
    })
    .catch((error) => {
      console.log(error);
    });
}

//  class Search-Result-title anchor tag
