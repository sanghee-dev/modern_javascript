// var: if문에서 내부 접근가능
if (true) {
  var hi = "hi!";
}
console.log(hi); // hi!

// var: function에서 불가능
function a() {
  var hi = "hi!";
}
console.log(hi); // error!

// let, const는 불가능
if (true) {
  const hi = "hi!";
}
console.log(hi); // error!

// 이상적인 방법: 밖에서 선언한다
let hi = "hi!";
if (true) {
  hi = "bye";
}
console.log(hi); // bye
