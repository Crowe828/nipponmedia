import axios from "axios";

export default {
  getContent: function () {
    return axios.get("https://api.jikan.moe/v3");
  },
};
