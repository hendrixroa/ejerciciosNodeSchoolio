
  function sum(arr,n){
    return n <= 1 ? 0 :
     sum(arr, n-1) + Number(arr[n]);
  }
  
  console.log(sum(process.argv,process.argv.length-1));
