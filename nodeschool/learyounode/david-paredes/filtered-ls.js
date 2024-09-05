'use strict'

const fs=require('fs')
const route=process.argv[2]
const ext=process.argv[3]
fs.readdir(route,(err,list)=>{
  let filterdList=list.filter(x=>{
    let fileExtension=x.split(".")
    return fileExtension[1]===ext
  })
  filterdList.forEach(x=>{console.log(x)})
})
