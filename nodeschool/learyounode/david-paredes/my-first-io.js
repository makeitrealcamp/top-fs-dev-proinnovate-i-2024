const fs=require('fs')
const file=process.argv[2]
fileBuffer=fs.readFileSync(file)
fileContent=fileBuffer.toString()
fileRows=fileContent.split("\n")
console.log(fileRows.length-1)
