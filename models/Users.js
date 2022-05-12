const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UsersSchema);

module.exports = User;
