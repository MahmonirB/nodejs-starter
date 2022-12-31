const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { getHashedValue } = require("../hash");
const _ = require("lodash");
const { validateUser } = require("../validate");

const router = express.Router();

router.post("/", async (req, res) => {
  const isValid = validateUser(req.body);
  if (isValid.error)
    return res.status(400).send(isValid.error.details[0].message);

  let user;
  try {
    user = await User.findOne({ email: req.body.email });
  } catch (err) {
    console.log(err.message);
  }

  if (user) return res.status(400).send("User is registered before!");

  user = new User(_.pick(req.body, ["name", "email", "password"]));
  user.password = await getHashedValue(user.password);

  try {
    const result = await user.save();
  } catch (err) {
    console.log(err.message);
  }

  const token = jwt.sign({ id: user._id }, config.get("jwtPrivateKey"));
  res.header('x-auth-token', token).send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
