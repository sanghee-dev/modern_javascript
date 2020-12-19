const user = {
  name: "sanghee",
  age: 26,
  password: 123,
};

// password 지우기
user["password"] = null;

console.log(user); // { name: 'sanghee', age: 26, password: null }

// password 지우기
const killPassword = ({ password, ...rest }) => rest;
const cleanUser = killPassword(user);

console.log(cleanUser); // { name: 'sanghee', age: 26 }

// default값
const setDefault = ({ country = "KR", ...rest }) => ({ ...rest, country });
const defaultUser = setDefault(user);

console.log(defaultUser); // { name: 'sanghee', age: 26, password: null, country: 'KR' }

// age➝old
const rename = ({ age: old, ...rest }) => ({ old, ...rest });
const renamedUser = rename(user);

console.log(renamedUser); // { old: 26, name: 'sanghee', password: null }
