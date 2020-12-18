function sayHi(name) {
  return `Hello, ${name || "unknown"}`;
  return "Hello, " + (name || "unknown");
}

console.log(sayHi("sanghee")); // Hello, sanghee
console.log(sayHi()); // Hello, unknown

// default value
function sayHi(name = "unknown") {
  return `Hello, ${name}`;
}

console.log(sayHi()); // Hello, unknown

// arrow function
const sayHi = (name = "unknown") => `Hello, ${name}`;

console.log(sayHi());
