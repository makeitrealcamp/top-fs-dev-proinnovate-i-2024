const http = require('http');
const bl = require('bl');
const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf-8');

  response.pipe(
    bl(function (err, data) {
      if (err) {
        return;
      }
      console.log(data.toString().length);
      console.log(data.toString());
    })
  );
});
