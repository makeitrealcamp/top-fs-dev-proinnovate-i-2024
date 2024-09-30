const fs = require('fs');
const filePath = process.argv[2];
const contentFile = fs.readFileSync(filePath);
const text = contentFile.toString();
const numberOfLines = text.split('\n').length - 1;
console.log(numberOfLines);
