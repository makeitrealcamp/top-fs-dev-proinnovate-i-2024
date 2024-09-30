const http = require('http');
let url = require('url');
let port = process.argv[2];

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}

function unixTime(time) {
  return { unixtime: time.getTime() };
}

let parseQuery = function (url) {
  switch (url.pathname) {
    case '/api/parsetime':
      return parseTime(new Date(url.query.iso));
    case '/api/unixtime':
      return unixTime(new Date(url.query.iso));
    default:
      return 'please enter a valid endpoint url';
  }
};

const server = http.createServer(function (request, response) {
  if (request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    url = url.parse(request.url, true);
    response.end(JSON.stringify(parseQuery(url)));
  } else {
    response.writeHead(405);
    response.end();
  }
});

server.listen(port);
