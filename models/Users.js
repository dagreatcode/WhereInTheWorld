const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: {
    type: String,
    trim: true
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: "String is Required"
  },

  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UsersSchema);

module.exports = User;