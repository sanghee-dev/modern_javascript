// ...rest makes []
const infiniteArgs = (...rest) => console.log(rest);
// [ '1', 2, true, 'potato' ]

infiniteArgs("1", 2, true, "potato");

//
const friendsMaker = (firstOne, ...rest) =>
  console.log(`My best friend is ${firstOne} and ${rest}`);

friendsMaker("A", "B", "C");
// My best friend is A and B,CMy best friend is A and B,C
