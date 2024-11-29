let fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], (err, list) => {
  if (err) {
    return;
  }
  list.forEach((filename) => {
    if (path.extname(filename).slice(1) == process.argv[3])
      console.log(filename);
  });
});
