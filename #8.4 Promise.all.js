const promise1 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "Frist resolve!");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "Second reject:(");
});
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Third resolve!");
});

// 모든 Promise를 기다리자
const motherPromise = Promise.all([promise1, promise2, promise3]);
motherPromise
  .then((results) => console.log(results))
  .catch((error) => console.log(error)); // 3초 후 Second reject:(
