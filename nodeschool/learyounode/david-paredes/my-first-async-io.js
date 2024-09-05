'use strict'

const fs=require('fs')
const file=process.argv[2]
fs.readFile(file, 'utf8', function (err, fileContent) {
  const fileRows=fileContent.split("\n")
  console.log(fileRows.length-1)
});
