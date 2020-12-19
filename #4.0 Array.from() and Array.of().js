// Array.of
const friends = Array.of("a", "b", "c");

console.log(friends); // [ 'a', 'b', 'c' ]

//Array.from: html에 있는 <button>$</button> 10개를 Array로 가져온다
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) =>
  button.addEventListener("click", () => console.log(button.innerText))
);
