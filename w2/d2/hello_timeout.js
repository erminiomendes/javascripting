const sentence = "hello there from lighthouse labs";
let timer = 0;


for (const char of sentence) {
  setTimeout(() => {
  console.log(char)
  }, timer += 50) 
}












