const fetch = require('node-fetch');
const cheerio = require('cheerio');
const url = 'https://es.wikipedia.org/wiki/Categor%C3%ADa:Escritores_de_Argentina';
const selector = 'div.mw-content-ltr:nth-child(3) > div:nth-child(1) > div > ul > li > a' 

fetch(url)
    .then(res => res.text())
    .then(html => {
        const $ = cheerio.load(html);
        const data = $(selector);
        console.log($(data).length);
        console.log(data.text());
  })
  .catch(function(err){
    //handle error
    console.log(err)
  });