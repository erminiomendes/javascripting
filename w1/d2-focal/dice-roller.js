const rolled = process.argv.slice(2)
let dice = 0;
let rndInt = 0;
let text = '';

let rolledDice = function(){
  rndInt = Math.floor(Math.random() * 6) + 1;
  return rndInt;
};

for(let i=0; i < rolled; i++){
  rolledDice();
  text += (i == (rolled - 1) ? rndInt : rndInt + ", ");
}

console.log(`Rolled ${rolled} dice: ${text}`);

