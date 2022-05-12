const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, require: true },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UsersSchema);

module.exports = User;
