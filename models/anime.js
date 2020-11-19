const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
  title: {
    type: String,
    require: false,
  },
  id: {
    type: Number,
    require: true,
  },
  jpTitle: {
    type: String,
    require: false,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  synopsis: {
    type: String,
    require: false,
  },
  startDate: {
    type: Number,
    require: false,
  },
  endDate: {
    type: Number,
    require: false,
    default: "TBD",
  },
  rank: {
    type: Number,
    require: false,
  },
  ageRating: {
    type: String,
    require: false,
  },
  episodeCount: {
    type: Number,
    require: false,
  },
  lengthEpisode: {
    type: Number,
    require: false,
  },
});

module.exports = Anime = mongoose.model("Anime", AnimeSchema);
