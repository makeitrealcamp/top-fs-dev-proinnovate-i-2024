const http = require('http');

function parseTime(iso) {
  const date = new Date(iso);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function unixTime(iso) {
  const date = new Date(iso);
  return {
    unixtime: date.getTime()
  };
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${process.argv[2]}`);
  const pathname = parsedUrl.pathname;
  const iso = parsedUrl.searchParams.get('iso');

  if (pathname === '/api/parsetime' && iso) {
    res.end(JSON.stringify(parseTime(iso)));
  } else if (pathname === '/api/unixtime' && iso) {
    res.end(JSON.stringify(unixTime(iso)));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(Number(process.argv[2]));
