const multiplicationTable = function(maxValue) {
let mult="";
let montaColun="";
  for (let i = 1; i <= maxValue; i++) {
    for (let col = 1; col <= maxValue; col++){
      mult = i * col;
      montaColun += mult;  
    }
    montaColun += "\n";
  }
  return montaColun;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));