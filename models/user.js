const mongoose = require("mongoose");
const { schema } = require("./anime");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
