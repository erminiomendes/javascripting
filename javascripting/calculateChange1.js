const calculateChange = (total, cash) => {
  let change1 = cash - total;
  let change = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };
  while(change1 > 0) {
    if(change1 > 2000) {
      change.twentyDollar += 1;
      change1 -= 2000;
    } else if(change1 > 1000) {
      change.tenDollar += 1;
      change1 -= 1000;
    } else if(change1 > 500) {
      change.fiveDollar += 1;
      change1 -= 500;
    } else if(change1 > 200) {
      change.twoDollar += 1;
      change1 -= 200;
    } else if(change1 > 100) {
      change.oneDollar += 1;
      change1 -= 100;
    } else if(change1 > 25) {
      change.quarter += 1;
      change1 -= 25;
    } else if(change1 > 10) {
      change.dime += 1;
      change1 -= 10;
    } else if(change1 > 5) {
      change.nickel += 1;
      change1 -= 5;
    } else if(change1 > 0) {
      change.penny += 1;
      change1 -= 1;
    }
  }
  return change;
}

console.log(calculateChange(2623, 7000));