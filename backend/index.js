const express = require("express");
const { connection } = require("mongoose");
const { UserModel } = require("./model/user.Model");
const { userRouter } = require("./routes/userroutes");
require("dotenv").config();
const cors = require("cors");
const {uploadRoute} = require('./routes/UpladRoutes')
const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));
// app.use(express.static('uploads'));

app.use('/posts', uploadRoute)


app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/users", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db connected");
    console.log("server  is connected");
  } catch (error) {
    console.log(error);
  }
});
