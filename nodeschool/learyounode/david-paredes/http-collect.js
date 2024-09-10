'use strict'
const http = require('http');
const url = process.argv[2];
const bl = require('bl');

http.get(url, response => {
  response.pipe(bl(function(err,data){
    if (err)
      return console.error(err);
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
