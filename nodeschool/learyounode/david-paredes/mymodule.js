'use strict'

const fs=require('fs')

module.exports=function(route,ext,callback){
  fs.readdir(route,(err,list)=>{
    if (err) { return callback(err) }
    let filterdList=list.filter(x=>{
      let fileExtension=x.split(".")
      return fileExtension[1]===ext
    })
    callback(null, filterdList)
  })
}
