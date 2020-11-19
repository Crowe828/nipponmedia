const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MangaSchema = new Schema({
  _id: {
    type: Number,
    require: true,
  },
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
    type: Number,
    require: false,
  },
  endDate: {
    type: Number,
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
