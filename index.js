let m3u8ToMp4 = require("m3u8-to-mp4");
let converter = new m3u8ToMp4();
let kanji = require('./kanji')

const downloadM3u = async lessons => {
  await Promise.all(lessons.map(async (lesson, index) => {
    await converter
    .setInputFile(lesson)
    .setOutputFile(`lesson${index+1}.mp4`)
    .start()
  }))
}

downloadM3u(lessons)
console.log(kanji)