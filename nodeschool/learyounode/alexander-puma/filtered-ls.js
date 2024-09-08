const fs = require('fs');
const directoryName = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(directoryName, (error, files) => {
  if (error) return;

  files.forEach((file) => {
    const extension = file.split('.')[1];

    if (extension == fileExtension) {
      console.log(file);
    }
  });
});
