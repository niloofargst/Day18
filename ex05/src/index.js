let shopingList = new Map([
    ['Banana', 3],
    ['Pineappke', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5],

]);

let arrKey = [];
let arrValue = [];

for (let col of shopingList.entries()) {
    arrKey.push(col[0]);
    arrValue.push(col[1]);
}

for (let i = 0; i < arrKey.length; i++) {
    console.log(`groceries: ${arrKey[i]}`);
}

for (let i = 0; i < arrValue.length; i++) {
    console.log(`amount: ${arrValue[i]}`);
}

for (let item of shopingList) console.log(item);

module.exports = { shopingList, arrKey, arrValue };