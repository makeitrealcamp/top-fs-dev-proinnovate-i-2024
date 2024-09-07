const http = require('http');
const bl = require('bl');
const url = process.argv[2];

/* let str = []; */

http.get(url, (response) => {
  response.setEncoding('utf-8');
  /* response.on('data', function (data) {
    str.push(data);
  }); */

  response.pipe(
    bl(function (err, data) {
      if (err) {
        return;
      }
      console.log(data.toString().length);
      console.log(data.toString());
    })
  );
  /* console.log(str); */
});

/* console.log(str); */
