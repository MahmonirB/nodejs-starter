const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function() {
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost/playground")
  .then((res) => winston.info(res.message));

}