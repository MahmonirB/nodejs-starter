const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 10,
    maxLength: 200,
  },
  category: {
    type: String,
    required: true,
    enum: ["book", "online"],
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: "An error occured into validator.",
    },
  },
  date: { type: Date, default: Date.now },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
