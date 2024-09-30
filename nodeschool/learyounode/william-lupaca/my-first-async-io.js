const fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) {
    console.log('An error has occurred.');
  }
  console.log(data.split('\n').length - 1);
});
