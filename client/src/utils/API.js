import axios from "axios";

export default {
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
  getDetail: function (drop) {
    console.log(drop);
    return axios.get(
      "https://kitsu.io/api/edge/" + drop + "/" + window.location.pathname
    );
  },
};
