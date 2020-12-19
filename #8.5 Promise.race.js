const promise1 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "Frist resolve!");
});
const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 2000, "Second resolve!");
});
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Third resolve!");
});

// 1등 racer를 기다리자
const motherPromise = Promise.race([promise1, promise2, promise3]);
motherPromise.then((results) => console.log(results)); // Frist resolve!
