const promise = new Promise((resolve, reject) => {
  // setTimeout(resolve, 2000, "resolve!");
  setTimeout(reject, 2000, "reject:(");
});

// 2초 후 catch reject:(
const thenFn = (result) => console.log("then", result);
const catchFn = (error) => console.log("catch", error);
promise.then(thenFn).catch(catchFn);
