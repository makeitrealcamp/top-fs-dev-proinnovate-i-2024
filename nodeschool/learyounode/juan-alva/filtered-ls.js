const fs = require('fs');

const directoryPath = process.argv[2];
const filesFormat = '.' + process.argv[3]

fs.readdir(directoryPath, (error, files) => {
  if (error) {
    return console.error(error);
  }
  const listFiles = files.filter(file => file.endsWith(filesFormat));
  for(i=0; i<listFiles.length; i++) {
    console.log(listFiles[i]);
  }
});
