const fs = require('fs');

const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      file.endsWith(`.${ext}`) && console.log(file);
    });
  }
});
