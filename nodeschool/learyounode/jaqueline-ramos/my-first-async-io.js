let fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    return;
  }
  const numberLines = data.split('\n').length - 1;
  console.log(numberLines);
});
