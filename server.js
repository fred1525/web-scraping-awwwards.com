var cheerio = require("cheerio");
var axios = require("axios");

console.log(
  "\n****************\n" + "\nscraping awwards.com\n" + "\n****************\n"
);

axios
  .get("http://www.awwwards.com/websites/clean/")
  .then(function(response) {
    // console.log(response.data);
    var $ = cheerio.load(response.data);

    var results = [];

    $("figure.rollover").each(function(i, element) {
      var imgLink = $(element)
        .find("a")
        .find("img")
        .attr("data-srcset")
        .split(",")[0]
        .split(" ")[0];

      results.push({
        imgLink: imgLink
      });
    });
    console.log(results);
  })
  .catch(console.log("an error happened"));
