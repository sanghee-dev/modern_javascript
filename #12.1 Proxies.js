const userObj = {
  username: "sanghee",
  age: 26,
  password: "12345",
};

// get, set == trap
const userFilter = {
  get: (target, prop, receiver) => {
    return prop === "password"
      ? `${"*".repeat(target[prop].length)}`
      : target[prop];
  },
  set: () => {
    console.log("Somebody wrote something");
  },
  deleteProperty: (target, prop) => {
    console.log(prop);
    if (prop === "password") {
      return;
    } else {
      target[prop] = "DELETED";
    }
  },
};

// Proxy(대상, 필터)
const filteredUser = new Proxy(userObj, userFilter);

console.log(filteredUser); // Proxy {username: "sanghee", age: 26}
console.log(filteredUser.username); // sanghee
console.log(filteredUser.password); // *****

filteredUser.active = true; // Somebody wrote something

delete filteredUser.password;
console.log(filteredUser); // Proxy {username: "sanghee", age: 26, password: "12345"}

delete filteredUser.username;
console.log(filteredUser); // Proxy {username: "DELETED", age: 26, password: "12345"}

delete filteredUser.age;
console.log(filteredUser); // Proxy {username: "DELETED", age: "DELETED", password: "12345"}
