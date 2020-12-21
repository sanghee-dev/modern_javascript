// generator*
function* listPeople() {
  yield "a";
  yield "b";
  yield "c";
}

const listG = listPeople();
console.log(listG); // listPeople {<suspended>}

console.log(listG.next()); // {value: "a", done: false}
console.log(listG.next()); // {value: "b", done: false}
console.log(listG.next()); // {value: "c", done: false}
console.log(listG.next()); // {value: undefined, done: true}

const numbers = [1, 2];

function* numberTeller() {
  for (const number of numbers) {
    yield number;
  }
}

const numberLooper = numberTeller();
console.log(numberLooper.next()); // {value: 1, done: false}
console.log(numberLooper.next()); // {value: 2, done: false}
console.log(numberLooper.next()); // {value: undefined, done: true}
