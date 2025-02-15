let p1 = {
  fname: "Hitesh",
  lname: "Ch",
  address: {
    h: 1,
    s: 1,
  },
};

let p2 = {
  fname: p1.fname,
  lname: p1.lname,
  address: p1.address,
};

p2.fname = "Piyush";
p2.lname = "Garg";

console.log(p2);
console.log(p1);
