const myModule = require('./mymodule');

const directoryName = process.argv[2];
const fileExtension = process.argv[3];

myModule(directoryName, fileExtension, (error, result) => {
  if (error) return;

  result.forEach((file) => {
    console.log(file);
  });
});
