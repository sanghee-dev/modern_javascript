/// ...Array
const numbers = [1, 2, 3];

const newNumbers = [0, ...numbers, 4];
console.log(newNumbers); // [ 0, 1, 2, 3, 4 ]

// ...Object
const human = {
  name: "sanghee",
};

console.log({ ...human, age: 26 }); // { name: 'sanghee', age: 26 }

// Object: 입력한 값이 favFood이다
const favFood = prompt("favFood");

const user = {
  name: "sanghee",
  age: 26,
  favFood: favFood !== "" ? favFood : undefined,
};

console.log(user); // {name: "sanghee", age: 26, favFood: "ramen"}

// && 연산자
const user = {
  name: "sanghee",
  age: 26,
  // 빈문자가 아니고 값이 있을 때
  ...(favFood !== "" && { favFood }),
};

console.log(user); // {name: "sanghee", age: 26, favFood: "ramen"}
