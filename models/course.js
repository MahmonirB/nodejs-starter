const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
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
      lowercase: true,
    },
    author: { type: String, trim: true },
    tags: {
      type: Array,
      validate: {
        isAsync: true,
        validator: function (v) {
          return new Promise((resolve, reject) => {
            if (v && v.length) return resolve("right");
            return reject("Opps!");
          });
        },
        message: "An error occured into validator.",
      },
    },
    date: { type: Date, default: Date.now },
    price: {
      type: Number,
      min: 10,
      max: 200,
      get: (v) => Math.round(v), // called when we read a value from db
      set: (v) => Math.round(v), // called when we write price value in db
    },
  })
);

module.exports = Course;
