const db = require("../models/");

// Defining methods for the animeController
module.exports = {
  // Find all animes
  findAll: function (req, res) {
    db.Anime.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  // Find one specific anime
  findById: function (req, res) {
    db.Anime.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  // Add an anime to your lists
  add: function (req, res) {
    console.log("Method", req.body)
    db.Anime.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  // Update you list of anime
  update: function (req, res) {
    db.Anime.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  // Remove an anime from your list
  remove: function (req, res) {
    db.Anime.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
