const router = require("express").Router();
const mangaController = require("../../controllers/mangaController");

// Matches with "/api/manga"
router.route("/").get(mangaController.findAll).post(mangaController.add);

// Matches with "/api/manga/:id"
router
  .route("/:id")
  .get(mangaController.findById)
  .put(mangaController.update)
  .delete(mangaController.remove);

module.exports = router;
