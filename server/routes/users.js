const router = require("express").Router();
const mongoose = require('mongoose');
const userModel = require("../models/users")
const bcrypt = require('bcrypt');

router.post("/register", async(req, res) => {
  try {

    const saltRounds = 10;
    const hash = bcrypt.hashSync(req.body.password, saltRounds);

    const newUser = new userModel({username: req.body.username, email: req.body.email, password: hash})

    const user = await newUser.save();
    res
      .status(200)
      .send(user._id)
  } catch (err) {
    res
      .status(500)
      .json(err)
  }
})

router.post("/login", async(req, res) => {
  try {
    const userPass = await userModel.findOne({
      username: req.body.username,
      email: req.body.email
    }, 'password');
      
    if (!userPass) {
      res.status(400).send("No user Found")
      return;
    }
      
      const userLogin = bcrypt.compareSync(req.body.password, userPass.password);
            !userLogin && res.status(400).send("Incorrect Password or Username");
   
      res
      .status(200)
      .send({ _id: userPass._id, username: req.body.username })
    return
      
  } catch (err) {
    res
      .status(500)
      .json(err)
    return
  }
})

module.exports = router