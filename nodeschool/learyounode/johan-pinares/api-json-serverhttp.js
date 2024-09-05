const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, 'http://google.com');
  const isoTime = new Date(parsedUrl.searchParams.get('iso'));

  if (parsedUrl.pathname === '/api/parsetime') {
    const timeData = {
      hour: isoTime.getHours(),
      minute: isoTime.getMinutes(),
      second: isoTime.getSeconds()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(timeData));
  } else if (parsedUrl.pathname === '/api/unixtime') {
    const unixTime = { unixtime: isoTime.getTime() };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(unixTime));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(Number(process.argv[2]));
