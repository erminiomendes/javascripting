const camelCase = function(input) {
let frase=""; 
 
  for (let i = 0; i < input.length; i++){
    
    if (input[i] === " "){
      frase += "";
    }else {
      frase += input[i];
    }
  
  }
return frase;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));