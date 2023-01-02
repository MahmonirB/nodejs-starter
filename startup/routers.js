const express = require("express");
const courseRouter = require("../routes/courses");
const homeRouter = require("../routes/home");
const userRouter = require("../routes/users");
const authRouter = require("../routes/auth");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); // built-in middleware func
  app.use(express.static("public"));
  app.use("/", homeRouter);
  app.use("/api/courses", courseRouter);
  app.use("/api/user", userRouter);
  app.use("/api/auth", authRouter);

};
