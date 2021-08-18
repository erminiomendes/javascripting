const transpose = function(matrix) {
  // Put your solution here
  let newArray = [];
  for (let i = 0; i < matrix.length; i++) {
    newArray.push([]);
    
  };
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix.length; k++) {
      newArray[k].push(matrix[i][k]);
    }
  }
  return newArray;
};

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));