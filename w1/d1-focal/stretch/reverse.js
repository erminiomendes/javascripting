let reverse = function(text){
  let textReversed=""
  for (let i = (text.length-1) ; i >= 0; i--){
    textReversed += text[i];
    //console.log(text.length);
    
  }
  return textReversed;
};

console.log(reverse("Emily"));