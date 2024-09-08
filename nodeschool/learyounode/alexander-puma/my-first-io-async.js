const fs = require('fs');
const file = process.argv[2];
fs.readFile(file, 'utf8', (error, data) => {
  if (error) return;
  const totallines = data.split('\n').length - 1;
  console.log(totallines);
});
