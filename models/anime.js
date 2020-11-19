const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  jpTitle: {
    type: String,
    require: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  synopsis: {
    type: String,
    require: true,
  },
  startDate: {
    type: Number,
    require: true,
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
    require: true,
  },
  lengthEpisode: {
    type: Number,
    require: false,
  },
});

module.exports = Anime = mongoose.model("Anime", AnimeSchema);
