const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth");
const apiRoutes = require("./api");

// Routes for authentication
router.use("/auth", authRoutes);
// Routes for the API
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use("*", (req, res) =>
  res.sendFile(path.join("app", "client", "build", "index.html"))
);

module.exports = router;
