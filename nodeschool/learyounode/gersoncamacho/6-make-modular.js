const filterLs = require('./module');

const [, , ruta, extension] = process.argv;

filterLs(ruta, extension, (err, data) => {
  if (err) {
    return console.error(err);
  }
  data.forEach(i => {
    console.log(i)
  });
});
