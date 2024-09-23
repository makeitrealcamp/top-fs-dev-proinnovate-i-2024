const http = require('http');

const firstUrl = process.argv[2];
const secondUrl = process.argv[3];
const thirdUrl = process.argv[4];

http.get(firstUrl, response => {
  response.setEncoding('utf8');
  let firstRes = '';
  response.on('data', data => {
    firstRes += data;
  })
  response.on('end', () => {
    http.get(secondUrl, response => {
      response.setEncoding('utf8');
      let secondRes = '';
      response.on('data', data => {
        secondRes += data;
      })
      response.on('end', () => {
        http.get(thirdUrl, response => {
          response.setEncoding('utf8');
          let thirdRes = '';
          response.on('data', data => {
            thirdRes += data;
          })
          response.on('end', () => {
            console.log(firstRes);
            console.log(secondRes);
            console.log(thirdRes);
          })
        })
      })
    })
  })
})
