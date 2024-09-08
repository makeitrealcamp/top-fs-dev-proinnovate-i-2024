const mymodule = require('./mymodule.js');

const directoryName = process.argv[2];
const fileExtension = process.argv[3];

mymodule(directoryName, fileExtension, (error, data) => {
  if (error) return;

  data.forEach((file) => {
    console.log(file);
  });
});
