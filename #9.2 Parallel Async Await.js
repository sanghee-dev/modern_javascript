const movieApi = "https://yts-proxy.now.sh/list_movies.json";

const getMovies = async () => {
  try {
    const [response1, response2] = await Promise.all([
      fetch(movieApi),
      fetch(movieApi),
    ]);
    const [json1, json2] = await Promise.all([
      response1.json(),
      response2.json(),
    ]);
    console.log(json1, json2);
  } catch (e) {
    console.log(":(", e);
  } finally {
    console.log("finally!");
  }
};

getMovies();
