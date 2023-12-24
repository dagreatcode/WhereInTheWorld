const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// typeOfUser
const UsersSchema = new Schema({
  // email: { type: String, trim: true, required: "email is required" },
  // password: { type: String, trim: true, required: "password is required" },
  email: {
    type: String,
    trim: true,
    required: "Email address is required",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required",
  },
  image: { type: String, required: false },
  description: { type: String, required: false },
  typeOfUser: {
    type: String,
    lowercase: false,
    trim: true,
    required: false,
    default: "User",
    // Admin: { type: String, lowercase: false, trim: true, required: false },
    // Coder: { type: String, lowercase: false, trim: true, required: false },
  },
  authorization: { type: String, required: false },

  // TODO: Add image model.
  date: { type: Date, default: Date.now },
});

UsersSchema.virtual("kindOfUser").get(function () {
  return `${this.typeOfUser} ${this.date}`;
});

const User = mongoose.model("User", UsersSchema);

module.exports = User;
