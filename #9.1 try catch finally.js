const movieApi = "https://yts-proxy.now.sh/list_movies.json";

const getMovies = async (api) => {
  try {
    const response = await fetch(api);
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(":(", e);
  } finally {
    console.log("finally!");
  }
};

getMovies(movieApi);
