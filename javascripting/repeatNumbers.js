const repeatNumbers = function(arr) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    let line = '';
    for (let j = 0; j < arr[i][1]; j++) {
      line += arr[i][0];
    }

    arr2.push(line);
  }
  
  return arr2.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));