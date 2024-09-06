const myModule = require('./06-myModule');

const folder = process.argv[2];
const ext = process.argv[3];

myModule(folder, ext, (error, result) => {
  if (error) return;

  result.forEach((file) => {
    console.log(file);
  });
});
