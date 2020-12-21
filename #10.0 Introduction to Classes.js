// class == 붕어빵틀
class User {
  constructor(name) {
    this.username = name;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.username}!`);
  }
}

// newUser == 붕어빵
const newUser = new User("sanghee");

console.log(newUser); // User {username: "sanghee"}
console.log(newUser.username); // sanghee
newUser.sayHello(); // Hello, I'm sanghee!
