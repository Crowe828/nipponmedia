const jwt = require("jsonwebtoken");
const config = require("../config");

// Middleware to check if token is valid and has not expired
module.exports = async (req, res, next) => {
  // Grab token from the request header
  const token = req.header("token");
  // If there is no token return error
  if (!token) return res.status(401).json({ message: "Unathorized User" });
  try {
    // Compare token
    const decoded = await jwt.verify(token, config.jwtSecret);
    // If true, send decoded user information to client
    if (decoded) {
      req.userId = decoded.userId;
      next();
    }
  } catch (err) {
    // Send error to client
    res.status(400).json({ message: "Invalid Token" });
  }
};
