const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

const User = mongoose.model(
  "User",
  new mongoose.Schema({
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
    }
  })
);

module.exports = User;
