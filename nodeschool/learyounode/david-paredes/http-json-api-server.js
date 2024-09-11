const http=require('http');
const url=require('url');

const port=process.argv[2];

const server=http.createServer((request,response)=>{
  const current_url=url.parse(request.url,true);
  const path_name=current_url.pathname;
  const query=current_url.query;
  const iso = query.iso;
  const date = new Date(iso);
  let answer={};
  if(path_name==="/api/parsetime"){
    answer={
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    }
  }else{
    answer={
      unixtime:date.getTime()
    }
  }
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(answer));
});

server.listen(port);
