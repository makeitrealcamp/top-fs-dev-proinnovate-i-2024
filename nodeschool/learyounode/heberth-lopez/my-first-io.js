const fs = require('fs');

const contentFile = fs.readFileSync(process.argv[2]).toString()
console.log(contentFile.match(/\n/g).length);
