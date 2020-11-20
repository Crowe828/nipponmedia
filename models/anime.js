const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
  title: {
    type: String,
    require: false,
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
  // user :{
  //   type: , 
  //   ref: "User"
  // }
});

const Anime = mongoose.model("Anime", AnimeSchema);
module.exports = Anime;
