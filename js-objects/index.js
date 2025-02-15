const person = {
  x: 10,
  firstName: "Piyush",
  lastName: "Garg",
  hobbies: ["Coding", "Gym"],
  isMarried: false,
  hasGf: false,
  hasCrush: Infinity,
  getFullName: function () {
    return "Piyush Garg";
  },
  address: {
    hno: 1,
    street: 1,
    countryCode: "IN",
    state: "PB",
  },
};

console.log(person.hobbies);
console.log(person.getFullName());
console.log(person.address.state);
console.log(person.address.xxyyzz);

const remote = {
  color: "black",
  brand: "XYZ",
  dimensions: {
    height: 1,
    width: 1,
  },
  turnOff: function () {},
  volumeUp: function () {},
};
