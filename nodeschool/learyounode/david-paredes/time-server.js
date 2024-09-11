const net=require('net');
const port=process.argv[2];

const server=net.createServer((socket)=>{
  const date=new Date();
  const day= String(date.getDate()).padStart(2, '0');
  const month= String(date.getMonth()+1).padStart(2, '0');
  const year= date.getFullYear();
  const time=String(date.getHours()).padStart(2, '0');
  const minutes=String(date.getMinutes()).padStart(2, '0');
  socket.write(year+"-"+month+"-"+day+" "+time+":"+minutes+"\n");
  socket.end();
});

server.listen(port);
