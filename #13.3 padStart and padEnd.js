let hours = 12;
let minutes = 3;
let seconds = 2;

let clock = `${hours < 10 ? `0${hours}` : hours}:${
  minutes < 10 ? `0${minutes}` : minutes
}:${seconds < 10 ? `0${seconds}` : seconds}`;

console.log(clock);

// padStart: 두자리수가 아니면 0을 넣는다.
minutes = String(minutes).padStart(2, "0");
console.log(minutes); // 0

hours = String(hours).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");

clock = `${hours}:${minutes}:${seconds}`;
console.log(clock); // 12:03:02

//padEnd
const time = "1";
console.log(time.padStart(2, "0").padEnd(3, "s")); // 01s
