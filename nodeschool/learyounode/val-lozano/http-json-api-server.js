const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });

  const parsedUrl = new url.URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  const isoDate = new Date(parsedUrl.searchParams.get('iso'));
  let dateRes = {};

  if (pathname === '/api/parsetime') {
    dateRes = {
      hour: isoDate.getHours(),
      minute: isoDate.getMinutes(),
      second: isoDate.getSeconds(),
    };
    res.end(JSON.stringify(dateRes));
  } else if (pathname === '/api/unixtime') {
    dateRes = {
      unixtime: isoDate.getTime(),
    };
    res.end(JSON.stringify(dateRes));
  }
});

server.listen(port);
