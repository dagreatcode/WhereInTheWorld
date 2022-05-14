const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// typeOfUser
const UsersSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, require: true },
  typeOfUser: { type: String, require: false },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UsersSchema);

module.exports = User;
