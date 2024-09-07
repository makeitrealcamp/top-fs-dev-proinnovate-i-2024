const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const fileLocation = process.argv[3];

const server = http.createServer(function (request, response) {
  fs.createReadStream(fileLocation).pipe(response);
});
server.listen(port);
