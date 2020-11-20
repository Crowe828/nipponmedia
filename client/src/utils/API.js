import axios from "axios";

export default {
  // API request to server side
  register(data) {
    return axios.post("/auth/register", data);
  },
  login(data) {
    return axios.post("/auth/login", data);
  },
  loadUser(headers) {
    return axios.get("/auth/user", headers);
  },
  //default API call to show popular animes on the home page
  defaultData: function () {
    return axios.get("https://kitsu.io/api/edge/trending/anime");
  },
  // API call to get the results for either anime/manga (using drop) and the desired search query (using query)
  getData: function (query, drop) {
    console.log(query, drop);
    return axios.get(
      "https://kitsu.io/api/edge/" + drop + "?filter%5Btext%5D=" + query
    );
  },
  saveAnime: function (animeData) {
    console.log(animeData);
    return axios.post("/api/animes", animeData);
  },
  getAnime: function (animes) {
    return axios.get("/api/animes", animes);
  },
  saveManga: function (mangaData) {
    return axios.post("/api/mangas", mangaData);
  },
  getManga: function (mangas) {
    return axios.get("/api/mangas", mangas);
  },
};
