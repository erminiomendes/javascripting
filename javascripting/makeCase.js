const makeCase = function(input, ccase) {
for (let i = 0; i < input.length; i++){
  input =  input.toLowerCase() 
  if (ccase == "camel"){
    if (input[i] === " "){
      frase += "";
    }else {
      frase += input[i];
    }
  }

}
  // Put your solution here
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));