'use strict';

const http = require('http');
const bl = require('bl');
let result=[]

function fetchUrls(i) {
  http.get(process.argv[i], response => {
    response.pipe(bl(function(err,data){
      if (err)
        return console.error(err);
      data = data.toString()
      result[i-2]=data;
      if(result.length===3){
        printLines();
        return ;
      }
      else{
        i=i+1;
        return fetchUrls(i);}
    }))
  })
}

function printLines(){
  result.forEach(x=>{console.log(x)});
}

fetchUrls(2);
