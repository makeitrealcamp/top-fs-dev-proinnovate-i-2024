const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data.split('\n').length -1);
})

