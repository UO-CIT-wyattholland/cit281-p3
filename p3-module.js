//const { count } = require("console");

//const { arrayBuffer } = require("stream/consumers");

function vaildDenomination(coin) {
    const coinVal = [1, 5, 10, 25, 50, 100];
    return coinVal.indexOf(coin) >= 0;
}

console.log(vaildDenomination(1));

//Returns the calculated value of a single coin object from the obj function parameter
//Must use object deconstruction to create constant variables denom and count from the obj function parameter, 
//using default object values of 0 for denom and count
function valueFromCoinObject(obj) {
   const {denom = 0, count = 0} = obj;
   return denom * count;
}
console.log(valueFromCoinObject({denom: 25, count: 4}))

//Iterates through an array of coin objects and returns the final calculated value of all coin objects
//Must use Array.reduce() method, and an arrow function with the Array.reduce() method
//Must call valueFromCoinObject()
//Extra credit: Handle scenario where the arr function parameter, rather than an array of coin objects, 
//contains another array of coin objects

function valueFromArray(arr) {
     return arr.reduce(
        (totalVal, coinObj) => 
            totalVal + valueFromCoinObject(coinObj), 
        0
    );
}

let coins = [
    { denom: 10, count: 4},
    { denom: 5, count: 3 },
];

console.log(valueFromArray(coins));

//pass in objects
function coinCount(...coinage) {
    return valueFromArray(coinage);
}

console.log(coinCount(...coins));

module.exports = { coinCount };
