// ...Array
const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];

console.log(...numbers); // 1 2 3
console.log([...numbers, ...strings]); // [ 1, 2, 3, 'a', 'b', 'c' ]

// ...Object
const human = {
  name: "sanghee",
};

const fav = {
  favFood: "chicken",
};

console.log({ ...human, ...fav }); // { name: 'sanghee', favFood: 'chicken' }
