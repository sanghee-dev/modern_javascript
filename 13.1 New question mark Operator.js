let name;

console.log("Hello,", name || "anonymous"); // Hello, anonymous
console.log("Hello,", name ?? "anonymous"); // Hello, anonymous

// || : 0을 false로 처리함
// ?? : 0을 false로 처리하지 않음
name = 0;
console.log("Hello,", name || "anonymous"); // Hello, anonymous
console.log("Hello,", name ?? "anonymous"); // Hello, 0

// || : ""을 false로 처리함
// ?? : ""을 false로 처리하지 않음
name = "";
console.log("Hello,", name || "anonymous"); // Hello, anonymous
console.log("Hello,", name ?? "anonymous"); // Hello,
