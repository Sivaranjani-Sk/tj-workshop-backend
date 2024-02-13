const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, required: true },
  mobile: { type: String, unique: true },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
