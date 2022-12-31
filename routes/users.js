const express = require("express");
const User = require("../models/user");
const { validateUser } = require("../validate");

const router = express.Router();

router.post("/", async (req, res) => {
  const isValid = validateUser(req.body);
  if (isValid.error) return res.status(400).send(isValid.error.details[0].message);

  let user;
  try {
    user = await User.findOne({ email: req.body.email });
  } catch (err) {
    console.log(err.message);
  }

  if (user) return res.status(400).send("User is registered before!");
  
  user = new User({ name: req.body.name , email: req.body.email , password: req.body.password });

  try {
    const result = await user.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }

  res.send(user);
});

module.exports = router;
