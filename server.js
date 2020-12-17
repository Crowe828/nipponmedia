require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("./config");
const routes = require("./routes");

const app = express();

// Middleware to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
}

// Connect to Mongo DB
mongoose
  .connect(config.MONGO_URI || "mongodb://localhost/nipponmedia", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Mongo DB Succesfully Connected`))
  .catch((err) => console.log(err));

// Use routes
app.use(routes);

// Check for "production" enviroment and set port
const PORT = process.env.PORT || 3001;

// Start server
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
