const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);
let responses = [];
let count = 0;

urls.forEach((url, i) => {
  http.get(url, (response) => {
    response.setEncoding('utf8');

    response.pipe(
      bl((err, data) => {
        if (err) {
          console.error(err);
        } else {
          responses[i] = data.toString();
          count++;

          if (count === urls.length) {
            responses.forEach((response) => {
              console.log(response);
            });
          }
        }
      })
    );
  });
});
