let fruits = ["apple", "cherry", "banana"];
let intFruits = new Array("kiwi", "avacado", "dragon fruit");

console.log(fruits);
console.log(intFruits);

console.log(typeof fruits);
console.log(typeof intFruits);

console.log(fruits[0]);
console.log(fruits.length);

fruits[0] = "blueberry";
console.log(fruits[0]);

fruits.push("new item");
console.log(fruits);

fruits.unshift("new item");
console.log(fruits);

fruits.pop();
console.log(fruits);
