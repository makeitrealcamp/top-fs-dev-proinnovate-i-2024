const fs = require('fs');

const path = process.argv[2];
const contentFile = fs.readFileSync(path).toString()
console.log(contentFile.match(/\n/g).length);
