const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs');

const url =  `https://wap.kanmeikan.com/novel/47466/6581424.html`
const htmlToText = require('html-to-text');
// fs.writeFile("input.txt", "hello world!", function(err) {
//   if(err) {
//       return console.log(err);
//   }
//   console.log("The file was saved!");
// });

async function ax() {
  console.log('!!!')
  let data = await axios.get(url)
  console.log(data)
  let html = data.data
  console.log('get')
  // let $ = cheerio.load(html)
  // let txt = $('#nr1')
  // console.log(txt)
  const text = htmlToText.fromString(html, {
    wordwrap: 130
  });
  fs.writeFile("input.txt", text, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was saved!");
});
}
ax()
// fs.readFile('input.txt', function (err, data) {
//   if (err) {
//       return console.error(err);
//   }
//   console.log("异步读取: " + data.toString());
// });