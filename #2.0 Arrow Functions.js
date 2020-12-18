const numbers = [1, 2, 3];

// function
const bigNum = numbers.map(function (number) {
  return number * 10;
});

// arrow function
const bigNum = numbers.map((number) => number * 10);

// implicit return X
const bigNum = numbers.map((number) => {
  number * 10;
});

console.log(bigNum);
