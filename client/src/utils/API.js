import axios from "axios";

export default {
  getAnime: function (query) {
    return axios.get(
      "https://kitsu.io/api/edge/anime?filter%5Btext%5D=" + query
    );
  },
};
