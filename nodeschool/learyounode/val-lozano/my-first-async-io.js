const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, file) => {
  if (err) {
    console.error(err);
  } else {
    const lines = file.split('\n').length - 1;
    console.log(lines);
  }
});
