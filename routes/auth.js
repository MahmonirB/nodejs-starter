const express = require("express");
const _ = require("lodash");
const User = require("../models/user");
const { getHashedValue, compareCredential } = require("../hash");
const { validateAuth } = require("../validate");

const router = express.Router();

router.post("/", async (req, res) => {
  const isValid = validateAuth(req.body);
  if (isValid.error)
    return res.status(400).send(isValid.error.details[0].message);

  let user;
  try {
    user = await User.findOne({ email: req.body.email });
  } catch (err) {
    console.log(err.message);
  }

  if (!user) return res.status(400).send("Email is not registered.");

  const validCredential = await compareCredential(req.body.password, user.password);

  if (!validCredential) return res.status(400).send("Invalid email or password.");

  res.send(_.pick(user, ["name", "email"]));
});

module.exports = router;
