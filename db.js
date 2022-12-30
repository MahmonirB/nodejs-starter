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
      isAsync: true,
      validator: function(v) {
        return new Promise((resolve, reject) => {
          if (v && v.length) return resolve("right");
          return reject("Opps!");
        })
      },
      message: "An error occured into validator.",
    }
  },
  date: { type: Date, default: Date.now },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
