let input = process.argv[2];
let pass = '';

let obfuscate = function(input){
  for (let x of input){
    pass += (x === "a" ? "4" : (x === "e" ? "3" : (x === "o" ? "0" : (x === "l" ? "1" : x))));

  }
return pass;
}

console.log(obfuscate(input));

