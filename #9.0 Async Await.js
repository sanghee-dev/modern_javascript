const movieApi = "https://yts-proxy.now.sh/list_movies.json";

// fetch, then
fetch(movieApi)
  .then((response) => response.json())
  .then((json) => console.log(json));

// async, await
const getMovies = async (api) => {
  const response = await fetch(api);
  const json = await response.json();
  console.log(json);
};

getMovies(movieApi);
