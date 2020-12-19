// Array.find: 만족하는 첫번째 요소
const emails = ["a@gmail.com", "a@naver.com", "b@Gmail.com"];

const gmail = emails.find((email) => email.includes("gmail"));
console.log(gmail); // a@gmail.com

// Array.findIndex()
// b@Gmail.com이라고 쓰인 요소를 찾으면 변경한다
const check = (array) =>
  array.findIndex((email) => email.includes("b@Gmail.com"));

let target = check(emails); // 2

if (target !== -1) {
  const targetName = emails[target].split("@")[0]; // b
  emails[target] = `${targetName}@gmail.com`; // b@gmail.com
}

console.log(emails); // [ 'a@gmail.com', 'a@naver.com', 'b@gmail.com' ]

// Array.fill(채울것, 인덱스)
const numbers = [1, 2, 3, 4, 5];
numbers.fill("*".repeat(1), 3);
numbers.fill("!".repeat(1), 0, 2);

console.log(numbers); // [ '!', '!', 3, '*', '*' ]

numbers.fill("-");
console.log(numbers); // [ '-', '-', '-', '-', '-' ]

// Array.includes
const strings = ["a", "b", "c", "d", "e"];
console.log(strings.includes("a")); // true
