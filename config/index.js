// Credentials for jwt Secret and Database
module.exports = {
  MONGO_URI:
    process.env.REACT_APP_MONGO_URI || process.env.REACT_APP_DATABASE_INFO,
  jwtSecret: process.env.REACT_APP_JWT_SECRET,
};
