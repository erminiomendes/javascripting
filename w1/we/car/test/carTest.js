const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return false if it's a hatchback", function() { // 4
    const car = {
      type: "hatchback" // Unless it's type is hatchback, then we always return false.
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true when the car is pink", function() { 
    const car = {
      color: "pink" // If the car's color is pink then return true.
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false when there are no details about the car", function() { 
    const car = {
      detail: ""
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car is a hatchback and pink", function() { 
    const car = {
      color: "pink",
      type: "hatchback",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true when the car has 11 litres/100km and is under or equal to $5,000", function() { 
    const car = {
      litresPer100km: "6",
      price: "5000",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

});





// If it's any other color or type, it must have:
// between 6 and 11 litres/100km
// and be under or equal to $5,000
// If no car gets passed into the function, it should return undefined.