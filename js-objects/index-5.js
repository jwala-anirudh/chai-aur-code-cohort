let p1 = {
  fname: "Hitesh",
  lname: "Ch",
};

let p2 = {
  ...p1, // Spread Operator ...
};

p2.fname = "Piyush";

console.log(p2);
console.log(p1);
