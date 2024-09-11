const http=require('http');
const fs = require('fs');

const port=process.argv[2];
const fileRoute=process.argv[3];

const server=http.createServer((request,response)=>{
  const fileStream=fs.createReadStream(fileRoute);
  response.writeHead(200,{'Content-Type':'text/plain'});
  fileStream.pipe(response);
});

server.listen(port);
