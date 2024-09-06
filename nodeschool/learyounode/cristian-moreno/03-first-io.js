const fs = require('fs');

const contents = fs.readFileSync(process.argv[2]);
const str = contents.toString();

const lines = str.split('\n');
console.log(lines.length - 1);
