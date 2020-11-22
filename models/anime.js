const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");

const AnimeSchema = new Schema({
  titleEn: {
    type: String,
    require: false,
  },
  titleJp: {
    type: String,
    require: false,
  },
  img: {
    type: String,
    require: false,
  },
  synopsis: {
    type: String,
    require: true,
  },
  startDate: {
    type: String,
    require: false,
  },
  endDate: {
    type: String,
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
  savedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  ],
});

const Anime = mongoose.model("Anime", AnimeSchema);
module.exports = Anime;
