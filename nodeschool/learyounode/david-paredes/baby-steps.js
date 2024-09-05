'use strict'

let answer=0
for(let i=2;i<process.argv.length;i++){
  answer+=parseInt(process.argv[i])
}
console.log(answer)
