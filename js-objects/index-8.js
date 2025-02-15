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
  address: {
    ...p1.address,
  },
};

p2.fname = "Piyush";
p2.address.h = "Hacked"; // cannot hack p1's address object

console.log(p2);
console.log(p1);
