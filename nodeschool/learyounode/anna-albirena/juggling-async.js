const http = require('http');
const bl = require('bl');
const urls = process.argv.slice(2);
let urlsLength = urls.length;

const results = [];

urls.forEach((url, index) => {
  http.get(url, (response) => {
    response.pipe(
      bl((err, data) => {
        if (err) {
          return err;
        }

        results[index] = data.toString();
        urlsLength--;

        if (urlsLength == 0) {
          results.forEach((result) => {
            console.log(result);
          });
        }
      })
    );
  });
});
