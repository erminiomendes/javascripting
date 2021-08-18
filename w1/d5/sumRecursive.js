// let sum = 0;
// function sumToOne(n) {
  
//   if(n >= 1){
//     sum += n;
    
//     n = n - 1;
//     sumToOne(sum);
//   }
//   return sum;
// }
  


// console.log(sumToOne(4));

function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));