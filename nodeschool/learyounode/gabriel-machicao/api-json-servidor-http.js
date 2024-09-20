const http = require('http');
const url = require('url');

const port = process.argv[2];

function parseTime(isoDate) {
  const date = new Date(isoDate);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}


function unixTime(isoDate) {
  return {
    unixtime: new Date(isoDate).getTime()
  };
}


const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const isoDate = parsedUrl.query.iso;


  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (pathname === '/api/parsetime') {
    res.end(JSON.stringify(parseTime(isoDate)));
  } else if (pathname === '/api/unixtime') {
    res.end(JSON.stringify(unixTime(isoDate)));
  } else {
    res.writeHead(404);
    res.end();
  }
});


server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
