import axios from "axios";

export default {
  getAnime: function () {
    return axios.get(
      "https://kitsu.io/api/edge/anime?filter%5Btext%5D=my%20hero%20academia"
    );
  },
};
