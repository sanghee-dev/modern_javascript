// hoisting: 변수를 끌어올림
var a;
console.log(a); // undefined
var a = "var";

// temporal dead zone
console.log(b); // error!
let b = "let";

// temporal dead zone
console.log(c); // error!
const c = "const";
