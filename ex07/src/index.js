let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
numberArray = new Set([...numberArray]);

let uniqueArray = [...numberArray].sort((a, b) => a - b);

console.log(uniqueArray);
// Only change code above this line
module.exports = { numberArray, uniqueArray };