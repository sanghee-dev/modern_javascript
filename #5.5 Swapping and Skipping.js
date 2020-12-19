// swapping
let mon = "Sat";
let sat = "Mon";

[mon, sat] = [sat, mon];
console.log(mon, sat); // Mon Sat

// omitting
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const [, , , thu, fri] = days;
console.log(thu, fri); // Thu Fri

const [mon, tue, wed, ...rest] = days;
console.log(rest); // [ 'Thu', 'Fri' ]
