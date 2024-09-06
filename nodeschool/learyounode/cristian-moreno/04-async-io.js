let fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
  if (err) return;
  const numberLines = data.split('\n').length - 1;
  console.log(numberLines);
});
