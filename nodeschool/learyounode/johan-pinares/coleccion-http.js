const http = require('http');
const bl = require('bl');
const url = process.argv[2];
http.get(url, (response) => {
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err)
    }
    const fullData = data.toString();
    console.log(fullData.length);
    console.log(fullData);
  }));
})
