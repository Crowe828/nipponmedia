const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MangaSchema = new Schema({
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
