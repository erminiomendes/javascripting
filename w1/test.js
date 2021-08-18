const titleCase = function (text) {
  text = text.toLowerCase();
  let textAux = '';
  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      textAux += (text[i].toUpperCase());
    } else if (text[i - 1] === " ") {
      textAux += (text[i].toUpperCase());
    } else {
      textAux += (text[i]);
    }
  }
  return textAux;
};






titleCase("this is an example") //should return "This Is An Example"
titleCase("test") // return "Test"
titleCase("i r cool") //should return "I R Cool"
titleCase("WHAT HAPPENS HERE") //should return "What Happens Here"
titleCase("") //should return ""
titleCase("A") //should return "A"