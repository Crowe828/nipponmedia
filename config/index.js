// Credentials for jwt Secret and Database
module.exports = {
  MONGO_URI:
    process.env.MONGODB_URI || process.env.DATABASE_INFO,
  jwtSecret: process.env.SECRET || "1337.h4x0r5.xxx",
};
