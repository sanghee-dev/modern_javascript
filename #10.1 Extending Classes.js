// class
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  sayHello = () => {
    console.log(`Hello, I'm ${this.username}!`);
  };
  getProfile = () => {
    console.log(`${this.username} ${this.email} ${this.password}`);
  };
  // 이중삼향연산자
  updatePassword = (currentPassword, newPassword) => {
    return currentPassword === this.password
      ? currentPassword !== newPassword
        ? ((this.password = newPassword), console.log("Password is updated:)"))
        : console.log("Password is same:(")
      : console.log("Password is wrong:(");
  };
}

const newUser = new User("sanghee", "@com", "123");

console.log(newUser.username); // sanghee
newUser.getProfile(); // sanghee @com 12345
newUser.updatePassword("111", "456"); // Password is wrong:(
newUser.updatePassword("123", "123"); // Password is same:(
newUser.updatePassword("123", "456"); // Password is updated:)
console.log(newUser.password); // 456

// extends
class Admin extends User {
  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
}

const newAdmin = new Admin("admin", "@com", "999", true);

console.log(newAdmin.username); // admin
newAdmin.deleteWebsite(); // Deleting the whole website...
newUser.deleteWebsite(); // error!
