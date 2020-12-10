import axios from "axios";

export default {
  // API request to logging in/creating an account
  register(data) {
    return axios.post("/auth/register", data);
  },
  login(data) {
    return axios.post("/auth/login", data);
  },
  loadUser(headers) {
    return axios.get("/auth/user", headers);
  },
  // Default API call to show popular animes on the home page
  defaultData: function () {
    return axios.get("https://kitsu.io/api/edge/trending/anime");
  },
  // API call to get the results for either anime/manga (using drop) and the desired search query (using query)
  getData: function (query, drop) {
    return axios.get(
      "https://kitsu.io/api/edge/" + drop + "?filter%5Btext%5D=" + query
    );
  },
  // API call to get the information for the anime from the API call and adds those properties to the model
  saveAnime: function (animeData) {
    return axios.post("/api/animes", animeData);
  },
  // grabs the anime's that are saved into the animes state
  getAnime: function (animes) {
    return axios.get("/api/animes", animes);
  },
  // deletes an anime matching it's specific ID for the profile page
  deleteAnime: function (id) {
    return axios.delete("api/animes/" + id, id);
  },
  // API call to get the information for the manga from the API call and adds those properties to the model
  saveManga: function (mangaData) {
    return axios.post("/api/mangas", mangaData);
  },
  // grabs the manga's that are saved into the animes state
  getManga: function (mangas) {
    return axios.get("/api/mangas", mangas);
  },
  // deletes a manga matching it's specific ID for the profile page
  deleteManga: function (id) {
    return axios.delete("api/mangas/" + id, id);
  },
};
