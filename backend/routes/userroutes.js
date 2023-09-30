const express = require("express");
const { UserModel } = require("../model/user.Model");
const { connection } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/SendEmail");

const { auth } = require("../middleware/auth.middleware");

const userRouter = express.Router();

// ! Get All Users List
userRouter.get("/", async (req, res) => {
  const { limit = 10, page = 1 } = req.query;
  const skip = (page - 1) * limit; // Calculate the number of documents to skip

  try {
    const users = await UserModel.find()
      .select("name email") // Adjust field names as needed
      .sort({ email: 1 }) // Replace 'fieldNameToSortBy' with the correct field name
      .skip(skip)
      .limit(Number(limit)); // Ensure 'limit' is converted to a number

    res.status(200).send({ message: "List Of users", users });
  } catch (error) {
    res.status(500).send({ message: "Server error", error: error.message });
  }
});

//! Users Total Count
userRouter.get("/usercount", async (req, res) => {
  try {
    const users = await UserModel.find().countDocuments();
    res.status(200).send({ count: users });
  } catch (error) {
    res.status(500).send({
      message: "Server error. Unable to retrieve user count.",
      error: error.message,
    });
  }
});

// ! Register User
userRouter.post("/register", async (req, res) => {
  const { email, pass, ...restOfRequestBody } = req.body;
  console.log("inside register");
  try {
    const emailexist = await UserModel.findOne({ email: email });

    if (emailexist) {
      return res
        .status(400)
        .send({ message: "Email Already exists, please log in." });
    }
    if (passwordCheck(pass)) {
      bcrypt.hash(pass, 10, async (err, hash) => {
        if (err) {
          return res.status(400).send({ error: err, message: "Hashing Error" });
        } else {
          const user = new UserModel({
            email,
            pass: hash,
            ...restOfRequestBody,
          });
          await user.save();
          const { pass, ...data } = user.toObject();


          return res.status(201).send({ message: "New user is created", data });

          const token = jwt.sign(
            {
              email: data.email,
              userID: data._id,
              userName: data.first_Name,
            },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2 days",
            }
          );
          const rtoken = jwt.sign(
            {
              email: data.email,
              userID: data._id,
              userName: data.first_Name,
            },
            process.env.REFRESH_TOKEN_KEY,
            {
              expiresIn: "7d",
            }
          );
          return res
            .status(201)
            .send({ message: "New user is created", data, token, rtoken });

        }
      });
    } else {
      res.status(400).send({
        message:
          "Password Must contains One letter One SplecialCase charecter and One lower case charecter and One Number",
      });
    }
  } catch (error) {
    res.status(500).send({ error: error.message, message: "Try-catch error" });
  }
});
// !Login User
userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  console.log("inside");
  try {
    const emailcheck = await UserModel.findOne({ email });
    // !checking emai exist or not
    if (emailcheck) {
      //! comparing password with saved hash versin
      bcrypt.compare(pass, emailcheck.pass, (err, result) => {
        const { pass, ...sanitizedEmailcheck } = emailcheck.toObject();

        if (result) {
          //! creating tokn
          const token = jwt.sign(
            {
              email: emailcheck.email,
              userID: emailcheck._id,
              userName: emailcheck.first_Name,
            },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2 days",
            }
          );
          //! creating refresh token
          const rtoken = jwt.sign(
            {
              email: emailcheck.email,
              userID: emailcheck._id,
              userName: emailcheck.first_Name,
            },
            process.env.REFRESH_TOKEN_KEY,
            {
              expiresIn: "7d",
            }
          );
          return res
            .send({
              message: `Welcome ${emailcheck.first_Name}`,
              user: sanitizedEmailcheck,
              token,
              rtoken,
            })
          
        } else {
          return res.send({ message: "Password does Not Match " });
        }
      });
    } else {
      res.send({ message: "Wrong Email..!" });
    }
  } catch (error) {
    res.status(400).send({
      message: "Login Failed please Try again or Try after Some time ",
      error: error.message,
    });
  }
});

// !Forgot Users Pasword
userRouter.post("/forgotpass", async (req, res) => {
  const { email } = req.body;
  console.log("forgorpass");
  if (!email) {
    return res.status(200).send({ message: "Please Provide Email" });
  } else {
    try {
      let user = await UserModel.findOne({ email });
      if (user) {
        const token = jwt.sign(
          { userId: user._id, username: user.first_Name },
          process.env.PASSWORD_RESET_KEY
        );
        const text1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
</head>
<body>
    <h4>Hello,</h4>
    <p>We received a request to reset your password for your account.</p>
    <p>To reset your password, click on the link below:</p>
    <p><b><a href=${process.env.WEBURL}/users/reset_password/${token} target="_blank">Reset Password</a></b></p>
    <p>If you didn't request this password reset, you can safely ignore this email.</p>
    <p><b>Thank you,</b></p>
    <p>Your Company Name</p>  
</body>
</html>`;

        const text = `here is the link to forgot Password, try to update Password :- \n\n  ${process.env.WEBURL}/reset_password/${token} \n\n If you not requested this then please ignore it `;

        let obj = await sendEmail(
          user.email,
          "Forgot Password from omkar",
          text,
          text1
        );
        if (!obj.issue) {
          user.token = token;
          await user.save();
          res.send({
            message: `Password reset link sent to ${user.email} email account, check the spam folder`,
            issue: false,
          });
        } else {
          user.token = "";
          await user.save();
          res.status(400).json({ error: obj.error, issue: true });
        }
      } else {
        res.status(404).json({ error: "User Not Found!", issue: true });
      }
    } catch (error) {
      res
        .status(500)
        .send({ message: "Internal Server error", error: error.message });
    }
  }
});

// ! Reset Password
userRouter.post("/reset_password/:token", async (req, res) => {
  const { token } = req.params;
  const { pass } = req.body;

  if (!passwordCheck(pass)) {
    return res.status(400).send({ Message: "Please Emter Corect Password" });
  }
  try {
    const user = await UserModel.findOne({ token: token });

    if (!user || user.token !== token) {
      return res.status(404).json({
        message: "Invalid or expired token. Please try again.",
      });
    }

    jwt.verify(token, process.env.PASSWORD_RESET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
      }

      if (decoded) {
        bcrypt.hash(pass, 5, async (err, hash) => {
          if (err) {
            return res.status(500).json({ message: "Internal Server Error" });
          }
          user.pass = hash;
          user.token = "";
          user.pass_update = Date.now();
          await user.save();
          res.status(200).json({ message: "Password has been changed" });
        });
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

// ! Update User data
userRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;

  try {
    user = await UserModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    }).select("-_id -pass -token");
    if (!user) {
      return res
        .status(404)
        .status({ message: `ID Not Found Please Check ID ${id}` });
    } else {
      res.status(200).send({ message: "User Data Updated", user });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
});

// ! Delete User

userRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    user = await UserModel.findByIdAndDelete({ _id: id });
    if (!user) {
      return res
        .status(404)
        .status({ message: `ID Not Found Please Check ID ${id}` });
    } else {
      res.status(200).send({ message: "User Data Deleted" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
});

//! Get Single User Data
userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await UserModel.findOne({ _id: id }).select("-pass");
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: "Server error", error });
  }
});

module.exports = {
  userRouter,
};

// !pass cheack
const passwordCheck = (value) => {
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return pattern.test(value);
};
