import axios from "axios";

export default {
  defaultData: function () {
    return axios.get("https://kitsu.io/api/edge/trending/anime");
  },
  getData: function (query, drop) {
    console.log(query, drop);
    return axios.get(
      "https://kitsu.io/api/edge/" + drop + "?filter%5Btext%5D=" + query
    );
  },
};
