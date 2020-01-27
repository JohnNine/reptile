const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs');

const schedule = require('node-schedule');

const htmlToText = require('html-to-text');
// fs.writeFile("input.txt", "hello world!", function(err) {
//   if(err) {
//       return console.log(err);
//   }
//   console.log("The file was saved!");
// });

fs.writeFile("input.txt", '', function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("清空");
});

let i = 0
let ready = 0
let tip = null
let rule = new schedule.RecurrenceRule();
rule.second = [0, 10, 20, 30, 40, 50,];


const scheduleCronstyle = () => {
  //每分钟的第30秒定时执行一次:
  schedule.scheduleJob(rule, async () => {
    console.log('tip:' +  tip,'i:' + i)
    if (i !== tip || i > 450) {
//      tip = i
      console.log(ready + ' 【start】')
      let url = `https://wap.kanmeikan.com/novel/47466/${6581424 + (i)}.html`
      console.log(url)
      let data = await axios.get(url)
      let html = data.data
      const text = htmlToText.fromString(html, {
        wordwrap: 1000
      });
      if (text.length > 100) {
        ready += 1
        fs.appendFile('input.txt', text, function (err) {
          if (err) {
            console.log('第' + readyi + '节加载失败')
          } else {
            console.log('第' + ready + '节加载完成')
          }
        })
        console.log('【next】 ' + ready)
      }
      i += 1
    } else {
      console.log(`【${i}】Loading.....`)
    }
  });
}
scheduleCronstyle()
// async function ax() {
//   while (i < 400) {
//     let url = `https://wap.kanmeikan.com/novel/47466/${6581424 + (i)}.html`
//     console.log(url)
//     let data = await axios.get(url)
//     let html = data.data
//     const text = htmlToText.fromString(html, {
//       wordwrap: 1000
//     });
//     if(text.length > 100) {
//       fs.appendFile('input.txt', text, function (err) {
//         if (err) {
//           console.log('第' + i + '节加载失败')
//         } else {
//           console.log('第' + i + '节加载完成')
//         }
//       })
//     }
//     i += 1
//     console.log('next'+i)
//   }
// }
// for (let i = 0; i < 183; i++) {
// ax()
// }
// fs.readFile('input.txt', function (err, data) {
//   if (err) {
//       return console.error(err);
//   }
//   console.log("异步读取: " + data.toString());
// });
