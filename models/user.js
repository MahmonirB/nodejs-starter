const mongoose = require("mongoose");
const config = require("config");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 255,
  },
  email: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 255,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minLength: 8,
    maxLength: 255,
  },
  isAdmin: Boolean,
});

// Encapsulate generating token into user object, using user with this._id
userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id, isAdmin: this.isAdmin }, config.get("jwtPrivateKey")); // get key from environment
};

const User = mongoose.model("User", userSchema);

module.exports = User;
