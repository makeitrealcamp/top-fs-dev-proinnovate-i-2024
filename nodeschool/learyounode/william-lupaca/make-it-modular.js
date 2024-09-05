const mymodule = require('./mymodule');

const directory = process.argv[2];
const extension = process.argv[3];

mymodule(directory, extension, (err, filteredFiles) => {
  if (err) {
    return console.error('Error:', err);  // Handle errors
  }

  filteredFiles.forEach(file => console.log(file));  // Print each file
});
