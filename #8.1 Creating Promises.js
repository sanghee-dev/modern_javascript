// Promise(약속)
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "resolve!");
});

// setInterval(함수, 시간, 입력값)
// 두번째부터 Promise {<fulfilled>: "resolve!"
setInterval(console.log, 1000, promise);
