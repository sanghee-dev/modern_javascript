const numbers = [1, 2, 3];

// for문: 1 2 3
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// forEach (current, index, current array)
// 1 0 [ 1, 2, 3 ] // 2 1 [ 1, 2, 3 ] // 3 2 [ 1, 2, 3 ]
const addZero = (c, i, a) => console.log(c, i, a);

numbers.forEach(addZero);

// for (of): 1 2 3
for (const number of numbers) {
  console.log(number);
}

// a b
for (const alphabet of "abc") {
  if (alphabet === "c") {
    break;
  } else {
    console.log(alphabet);
  }
}
