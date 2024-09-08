const http = require('http');

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${process.argv[2]}`);
  const pathname = parsedUrl.pathname;
  const isoTime = parsedUrl.searchParams.get('iso');
  const date = new Date(isoTime);

  let result;

  if (pathname === '/api/parsetime') {
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  } else if (pathname === '/api/unixtime') {
    result = {
      unixtime: date.getTime(),
    };
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);
