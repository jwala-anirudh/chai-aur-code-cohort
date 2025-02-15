let p1 = {
  fname: "Hitesh",
  lname: "Ch",
  address: {
    h: 1,
    s: 1,
  },
};

const p1KaString = JSON.stringify(p1);
console.log(p1KaString);
let p2 = JSON.parse(p1KaString);

p2.fname = "Piyush";
p2.address.h = "Hacked"; // cannot hack p1's address object

console.log(p2);
console.log(p1);
