const user = {
  name: "sanghee",
  profile: {
    email: "@gmail.com",
  },
};

const newUser = {
  name: "sanghee",
};

// profile이 존재하고 profile.email이 존재하면 출력한다.
console.log(user.profile.email); // @gmail.com
console.log(user.profile && user.profile.email); // @gmail.com
console.log(newUser.profile && newUser.profile.email); // undefined

// ?.연산자
// newUser.profile존재? email존재?
console.log(newUser.profile?.email); // undefined
