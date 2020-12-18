// includes
isEmail = (email) => email.includes("@");

console.log(isEmail("@gmail.com")); // true

// repeat
const CC_Number = "6060";

const displayName = `${"*".repeat(10)}${CC_Number}`;

console.log(displayName); // **********6060

// startsWith, endsWith
const name = "Leesanghee";

console.log(name.startsWith("Lee")); // true
console.log(name.endsWith("hee")); // true
