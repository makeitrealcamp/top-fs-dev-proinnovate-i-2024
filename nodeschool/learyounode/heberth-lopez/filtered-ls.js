const fs = require('fs');

const path = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(path, (err, list) => {
  if (err) console.log(err);

  list.forEach(file => {
    if (file.endsWith(ext)) {
      console.log(file);
    }
  })
})
