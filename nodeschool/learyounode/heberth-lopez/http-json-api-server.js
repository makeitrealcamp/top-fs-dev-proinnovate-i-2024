const http = require('http');
const url = require('url');
const qs = require('querystring');

const port = process.argv[2];

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url);
  const query = qs.parse(parsedUrl.query);

  if (request.method !== 'GET') {
    response.statusCode = 405;
    response.setHeader('Allow', 'POST');
    return response.end('Only POST requests');
  }

  if (parsedUrl.pathname === '/api/parsetime') {
    const isoTime = query.iso;
    const date = new Date(isoTime);
    const parsedTime = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(parsedTime));

  } else if (parsedUrl.pathname === '/api/unixtime') {
    const isoTime = query.iso;
    const date = new Date(isoTime);
    const unixTime = {
      unixtime: date.getTime(),
    };
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(unixTime));
  } else {
    response.statusCode = 404;
    return response.end('Not found');
  }
});

server.listen(port);
