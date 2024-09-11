const http=require('http');

const port=process.argv[2];

const server=http.createServer((request,response)=>{
  if(request.method==="POST"){
    let chunks=[];
    request.on('data',(chunk)=>{
      chunks.push(chunk);
    });
    request.on('end',()=>{
      const data=Buffer.concat(chunks).toString().toUpperCase();
      response.end(data);
    });
  }
});
server.listen(port);
