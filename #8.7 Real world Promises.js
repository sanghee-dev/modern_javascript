// google
fetch("https://google.com")
  .then((response) => console.log(response))
  .catch((e) => console.log(e)); // TypeError: Failed to fetch

// html
fetch("http://127.0.0.1:5500/index.html")
  .then((response) => {
    console.log(response); // Response가 출력됨
    return response.text();
  })
  .then((text) => console.log(text)) // document가 출력됨
  .catch((e) => console.log(e));

// movie api
fetch("https://yts-proxy.now.sh/list_movies.json")
  .then((response) => {
    console.log(response); // Response가 출력됨
    return response.json();
  })
  .then((json) => console.log(json)) // json이 출력됨
  .catch((e) => console.log(e));
