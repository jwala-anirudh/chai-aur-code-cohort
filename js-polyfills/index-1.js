if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    const originalArr = this; // Current Object ki taraf point karta hai

    for (let i = 0; i < originalArr.length; i++) {
      userFn(originalArr[i], i);
    }
  };
}

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i], i);
      result.push(value);
    }

    return result;
  };
}

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result.push(this[i]);
      }
    }

    return result;
  };
}

const arr = [1, 2, 3, 4, 5, 6];

// Error: .forEach function does not exist on arr variable

// Real Signature ko samjo - No return, function input, value, index
// calls my fn for every value

const ret = arr.forEach(function (value, index) {
  console.log(`Value at Index ${index} is ${value}`);
});

console.log(`Ret is`, ret);

const myRet = arr.myForEach(function (value, index) {
  console.log(`My forEach Value at Index ${index} is ${value}`);
});

console.log(`My Ret is`, myRet);

// Signature .map
// Return? - New Array, Each ele Iterate, userFn

const n = arr.map((e) => e * 2);
const n2 = arr.myMap((e) => e * 3);
console.log(n);
console.log(n2);

// Filter
// Signature: Return - new array | input: userFn
// agar user ka function True return karta hai toh current value ko new array mein include kar leta hai

const n3 = arr.filter((e) => e % 2 === 0);
const n4 = arr.myFilter((e) => e % 2 === 0);
console.log(n3);
console.log(n4);
