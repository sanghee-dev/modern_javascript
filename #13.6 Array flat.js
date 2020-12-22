// flat: 배열의 깊이↓
const array = [1, [2], [3, [4, 5]]];

console.log(array); // [1, Array(1), Array(2)]
console.log(array.flat()); // [1, 2, 3, Array(2)]
console.log(array.flat(2)); // [1, 2, 3, 4, 5]
