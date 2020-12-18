function hello() {
  console.log("hello!");
}
hello();

const hello = function () {
  console.log("hello!");
};
hello();

const hello = () => console.log("hello!");
hello();

const numbers = [1, 2, 3];

const bigNum = numbers.map(function (number) {
  return number * 10;
});

const bigNum = numbers.map((number) => number * 10);

console.log(bigNum);

// implicit return X
const bigNum = numbers.map((number) => {
  number * 10;
});

console.log(bigNum); // 아무것도 안찍힘
