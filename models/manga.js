const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MangaSchema = new Schema({
  titleEn: {
    type: String,
    require: true,
  },
  TitleJp: {
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
