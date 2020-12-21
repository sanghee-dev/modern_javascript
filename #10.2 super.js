// class
class User {
  constructor({ username, email, password }) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

const newUser = new User({
  username: "sanghee",
  email: "@com",
  password: "123",
});

console.log(newUser.username); // sanghee

// extends
class Admin extends User {
  constructor({ username, email, password, superAdmin, isActive }) {
    super({ username, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
}

const admin = new Admin({
  username: "admin",
  email: "@com",
  password: "123",
  superAdmin: true,
  isActive: true,
});

console.log(admin.username); // admin
console.log(admin.superAdmin); // true
