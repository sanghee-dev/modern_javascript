// finally: 결과에 상관없이 finally를 출력한다
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "resolve!");
  setTimeout(reject, 1000, "reject:(");
})
  .then((result) => console.log("then", result)) // 1초 후
  .finally(() => console.log("finally")); // then이 출력된 후
