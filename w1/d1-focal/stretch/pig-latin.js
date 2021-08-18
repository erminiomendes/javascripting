let pigLatin = function(text){
  let latin = "";
  let first = "";
  for (let i = 0 ; i < text.length; i++){
    if (i > 0){
      latin += text[i];
    }
  }
  latin = (`${latin} ${text[0]} ay`);
  //latin = (latin + text[0] + "ay");
  return latin;
};

console.log(pigLatin("Emily"));