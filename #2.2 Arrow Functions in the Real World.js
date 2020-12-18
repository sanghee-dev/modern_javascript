const emails = [
  "a@naver.com",
  "a@gmail.com",
  "b@google.com",
  "b@gmail.com",
  "c@naver.com",
];

// find, includes
const firstGmail = emails.find((email) => email.includes("@gmail.com"));
console.log(firstGmail); // a@gmail.com

// filter
const noGmail = emails.filter((email) => !email.includes("@gmail.com"));
console.log(noGmail); // [ 'a@naver.com', 'b@google.com', 'c@naver.com' ]

// forEach, split
const username = [];
emails.forEach((email) => username.push(email.split("@")[0]));
console.log(username); // [ 'a', 'a', 'b', 'b', 'c' ]

// map, ({Objects})
const userObject = emails.map((email, index) => ({
  username: email.split("@")[0],
  index,
}));
console.table(userObject);
