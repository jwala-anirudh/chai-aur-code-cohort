let p1 = {
  fname: "Hitesh",
  lname: "Ch",
  address: {
    h: 1,
    s: 1,
  },
};

let p2 = {
  ...p1,
};

p2.fname = "Piyush";
p2.address.h = "Hacked";

console.log(p2);
console.log(p1);
