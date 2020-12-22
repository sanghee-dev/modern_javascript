// 문자: 알파벳순
const s = ["a", "cc", "bbb"];
s.sort();
console.log(s); // ["a", "bbb", "cc"]

// 문자: 길이순
s.sort((a, b) => a.length - b.length);
console.log(s); // ["a", "cc", "bbb"]

// 숫자: 내림차순
const n = [1, 2, 3];
n.sort((a, b) => b - a);
console.log(n); // [3, 2, 1]

// 객체: 나이순
const friends = [
  {
    name: "sanghee",
    age: 26,
  },
  {
    name: "sanghee",
    age: 25,
  },
];

const orderedFriends = (a, b) => {
  return a.age - b.age;
};

// {name: "sanghee", age: 25} {name: "sanghee", age: 26}
console.log(friends.sort(orderedFriends));
console.log(friends); // same
