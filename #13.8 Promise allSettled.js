// Promise.all: 모두가 성공 O
// 결과: error!
const p = Promise.all([fetch("https//yts.mx/api/v2/list_movies.json"), fetch()])
  .then((response) => console.log("success!", response))
  .catch((e) => console.log("error!", e));

// Promise.allSettled: 모두가 성공 X
// 결과: success!
const s = Promise.allSettled([
  fetch("https//yts.mx/api/v2/list_movies.json"),
  fetch(),
])
  .then((response) => console.log("success!", response))
  .catch((e) => console.log("error!", e));
