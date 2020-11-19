const db = require("../models/manga");

module.exports = {
  findAll: function (req, res) {
    db.Manga.find(req.query)
      .sort({ title: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  add: function (req, res) {
    db.Manga.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    db.Manga.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  update: function(req, res) {
    db.Manga
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  remove: function(req, res) {
    db.Manga
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  }
};
