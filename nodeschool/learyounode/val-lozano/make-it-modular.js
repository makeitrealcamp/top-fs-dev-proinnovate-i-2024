const filteredLs = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];

filteredLs(dir, ext, (err, filteredFiles) => {
  if (err) {
    console.log(err);
  } else {
    filteredFiles.forEach((file) => {
      console.log(file);
    });
  }
});
