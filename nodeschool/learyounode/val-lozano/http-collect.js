const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf8');

  response.pipe(
    bl((err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data.length);
        console.log(data.toString());
      }
    })
  );
});
