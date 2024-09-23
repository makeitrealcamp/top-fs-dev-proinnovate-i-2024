const myFunction = require('./mymodule');

const path = process.argv[2];
const ext = process.argv[3];

myFunction(path, ext, (err, list) => {
  if (err) console.log(err);

  list.forEach(file => {
    console.log(file);
  })
})
