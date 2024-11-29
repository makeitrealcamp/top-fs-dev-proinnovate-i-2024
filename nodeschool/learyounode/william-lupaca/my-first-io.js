const fs = require('fs');
const buf = fs.readFileSync(process.argv[2]);
console.log(buf.toString().split('\n').length - 1);
