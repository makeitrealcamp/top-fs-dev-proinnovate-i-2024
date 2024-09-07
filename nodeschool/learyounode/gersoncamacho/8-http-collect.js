const http = require('http');
const Bl = require('bl');

http.get(process.argv[2], (response) => {
  const bl = new Bl();

  response.pipe(bl((err, data) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      return;
    }
    console.log(data.toString().legth);
    console.log(data.toString())
  }));
});
