const mymodule = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir, ext, (err, files) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  files.forEach(file => {
    console.log(file);
  });
});
