const express = require("express");
const { UserModel } = require("../model/user.model");
const { connection } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { auth } = require("../middleware/auth.middleware");

const userRouter = express.Router();

function checkpass(pass) {
  const uppercase = /[A-Z]/;
  if (!uppercase.test(pass)) {
    return false;
  }
  const num = /[0-9]/;
  if (!num.test(pass)) {
    return false;
  }
  const specchar = /[!@#$%^&*]/;
  if (!specchar.test(pass)) {
    return false;
  }
  if (pass.length < 8) {
    return false;
  }
  return true;
}

userRouter.post("/register", async (req, res) => {
  try {
    const { firstname,lastname, email, pass, phone, date } = req.body;
    if (checkpass(pass)) {
      const hash = await bcrypt.hash(pass, 5);
      const user = new UserModel({ firstname,lastname, email, pass: hash, phone, date });
      await user.save();

      res.status(200).send({
        msg: "The new user has been registered",
        registeredUser: user,
      });
    } else {
      res.send("check your password");
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(pass, user[0].pass, function (err, result) {
        if (result) {
          const token = jwt.sign({ email: user[0].email }, "masai");
          res.status(200).send({ msg: "Login successful!", token: token });
        }
      });
    } else {
      res.send("wrong credentials");
    }
  } catch (error) {
    res.status(400).send({ error: "error here" });
  }
});

// userRouter.post("/logout", async (req, res) => {
//   const token = req.headers.authorization ? req.headers.authorization : null;
//   const userbalcklist = await UserModelBlacklist.findOne({ token: token });
//   if (userbalcklist) {
//     return res.status(400).json({ error: "token is blacklisted" });
//   }
//   const newblacklist = new UserModelBlacklist({ token: token });
//   await newblacklist.save();
//   res.status(200).json({ msg: "user has been logged out" });
// });

// add posts


module.exports = {
  userRouter,
};
