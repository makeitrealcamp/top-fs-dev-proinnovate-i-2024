const mymodule = require('./mymodule.js');

const dirName = process.argv[2];
const extFilter = process.argv[3];

mymodule(dirName, extFilter, (err, files) => {
  if (err) {
    return console.error('Error:', err);
  }

  files.forEach((file) => console.log(file));
});
