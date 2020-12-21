// unique values
const newSet = new Set([1, 2, 3, 3]);

console.log(newSet); // Set(3) {1, 2, 3}
console.log(newSet.has(1)); // true

newSet.delete(1);
console.log(newSet); // Set(2) {2, 3}

newSet.clear();
console.log(newSet); // Set(0) {}

newSet.add(1);
console.log(newSet); // Set(1) {1}

console.log(newSet.size); // 1

console.log(newSet.keys()); // SetIterator {1}


