const promise = new Promise((resolve, reject) => {
  resolve(1);
});

const timesTwo = (n) => n * 2;

promise
  .then(timesTwo) // 1 * 2 = 2
  .then(timesTwo) // 2 * 2 = 4
  .then(() => {
    throw Error("error!");
  })
  .then((n) => console.log(n)) // 4
  .catch((error) => console.log(error)); // error!
