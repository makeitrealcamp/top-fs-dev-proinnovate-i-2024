'use strict'

const myModule=require('./mymodule')

const route=process.argv[2]
const ext=process.argv[3]

function listFiles(err,filterdList){
  if(err){
    console.log(err)
    return
  }
  filterdList.forEach(x=>{console.log(x)})
}

myModule(route,ext,listFiles)
