const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs');

const htmlToText = require('html-to-text');
// fs.writeFile("input.txt", "hello world!", function(err) {
//   if(err) {
//       return console.log(err);
//   }
//   console.log("The file was saved!");
// });
let i = 0

async function ax() {
  while (i < 184) {
    let url = `https://wap.kanmeikan.com/novel/47466/${6581424 + (i * 2)}.html`
    console.log(url)
    let data = await axios.get(url)
    let html = data.data
    const text = htmlToText.fromString(html, {
      wordwrap: 1000
    });
    fs.appendFile('input.txt', text, function (err) {
      if (err) {
        console.log('第' + i + '节加载失败')
      } else {
        console.log('第' + i + '节加载完成')
      }
    })
    i++
  }

  // fs.writeFile("input.txt", text, function (err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("The file was saved!");
  // });
}
// for (let i = 0; i < 183; i++) {
  ax()
// }
// fs.readFile('input.txt', function (err, data) {
//   if (err) {
//       return console.error(err);
//   }
//   console.log("异步读取: " + data.toString());
// });