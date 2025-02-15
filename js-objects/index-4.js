let p1 = {
  fname: "Hitesh",
  lname: "Ch",
};

let p2 = {
  fname: p1.fname,
  lname: p1.lname,
};

p2.fname = "Piyush";
p2.lname = "Garg";

console.log(p2);
console.log(p1);
