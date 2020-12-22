const person = {
  name: "sanghee",
  age: 26,
};

console.log(Object.values(person)); // ["sanghee", 26]

// Object.entries: object -> array
console.log(Object.entries(person)); // ["name", "sanghee"] ["age", 26]

Object.entries(person).forEach((item) => console.log(item)); // ["name", "sanghee"] ["age", 26]

// Object.fromEntries: array -> object
const user = Object.fromEntries([
  ["name", "sanghee"],
  ["age", 26],
]);

console.log(user); // {name: "sanghee", age: 26}
