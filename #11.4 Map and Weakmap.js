const map = new Map();

map.set("age", 26);

console.log(map); // Map(1) {"age" => 26}
console.log(map.has("age")) // true
console.log(map.get("age")) // 26