const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MangaSchema = new Schema({
  title: {
    type: String,
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
    require: true,
  },
  startDate: {
    type: String,
    require: false,
  },
  endDate: {
    type: String,
    require: false,
  },
  rank: {
    type: Number,
    require: false,
  },
  ageRating: {
    type: String,
    require: false,
  },
  volumeCount: {
    type: Number,
    require: false,
  },
});

const Manga = mongoose.model("Manga", MangaSchema);
module.exports = Manga;
