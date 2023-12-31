const express = require("express");
 const { model } = require("mongoose");
const router = express.Router();
const User = require("../models/userModel");
router.post("/signup", async (req, res) => {
  try {
    const newuser = new User(req.body);
    const user = await newuser.save();
    res.send("User Created Successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json({ message: "invalid credentials" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});


module.exports = router;