const http = require('http');
const map = require('through2-map')

const port = Number(process.argv[2]);

const server = http.createServer((req,res) => {
  if(req.method === 'POST') {
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  }
})

server.listen(port)
