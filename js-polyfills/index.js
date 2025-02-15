Object.prototype.chai = function () {
  console.log("Chai");
};

const arr = [1, 2, 3];
console.log(arr);

if (!Array.prototype.fill) {
  // throw new Error("Please update your browse");
  // Fallback - Polyfill
  Array.prototype.fill = function () {};
}

console.log(arr.fill());

const str = "Piyush";
console.log(str);
console.log(str.length);

const obj = { x: 1, length: 1 };
console.log(obj.x);
