function merge (arr1,arr2){
  biggerArr = 0;

  if (arr1.length >= arr2.length){
    biggerArr = arr1;
    smallerArr = arr2;
  }else {
    biggerArr = arr2;
    smallerArr = arr1;
  }
 
  arrOrder = [];
  for (let i = 0; i < (smallerArr.length+biggerArr.length); i++){
    for (let x = 0; x < biggerArr.length; x++) {
      if(smallerArr[i] <= biggerArr[x]){
        arrOrder.push(smallerArr[i]);
        
        }else {
        arrOrder.push(biggerArr[x]);
        }
      }
    return arrOrder;
  }

}



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);