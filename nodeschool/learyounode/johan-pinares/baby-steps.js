
function argvSum(arr){
  let sumTotal=0;
  for(i=2;i<arr.length;i++){
    sumTotal+=Number(arr[i])
  }
  return sumTotal;
}
console.log(argvSum(process.argv))
