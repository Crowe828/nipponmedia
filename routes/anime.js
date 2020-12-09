const router = require("express").Router();
const animeController = require("../controllers/animeController");

// Matches with "/api/books"
router.route("/profile").get(animeController.findAll).post(animeController.add);

// Matches with "/api/books/:id"
router
  .route("/add/:id")
  .get(animeController.findById)
  .post(animeController.add)
  .put(animeController.update);

module.exports = router;
