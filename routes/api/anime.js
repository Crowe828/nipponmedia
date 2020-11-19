const router = require("express").Router();
const animeController = require("../../controllers/animeController");

// Matches with "/api/anime"
router.route("/").get(animeController.findAll).post(animeController.add);

// Matches with "/api/anime/:id"
router
  .route("/:id")
  .get(animeController.findById)
  .put(animeController.update)
  .delete(animeController.remove);

module.exports = router;
