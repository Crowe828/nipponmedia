const router = require("express").Router();
const animeRoutes = require("./anime");
const mangaRoutes = require("./manga");

// Anime Route
router.use("/animes", animeRoutes);
// Manga Route
router.use("/mangas", mangaRoutes);



module.exports = router;
