const db = require("../models/");

// Methods for mangaController
module.exports = {
  // Find all manga
  findAll: function (req, res) {
    db.Manga.find(req.query)
      .sort({ title: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  // Find a specific manga
  findById: function (req, res) {
    db.Manga.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  // Add a new manga to your list
  add: function (req, res) {
    db.Manga.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  // Update manga list
  update: function (req, res) {
    db.Manga.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  // Remove a manga from your favorites list
  remove: function (req, res) {
    db.Manga.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
