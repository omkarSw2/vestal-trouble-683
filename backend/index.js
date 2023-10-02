const express = require("express");
const { connection } = require("mongoose");
const { UserModel } = require("./model/user.Model");
const { userRouter } = require("./routes/userroutes");
require("dotenv").config();

const cors = require("cors");
const { postRouter } = require("./routes/postroutes");
const { commentRouter } = require("./routes/commentroute");

const { adminRouter } = require("./routes/adminroutes");

const {UploadModel} = require('./model/uploadModel')
const {uploadRoute} = require('./routes/UpladRoutes')


const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/users", userRouter);
app.use("/posts",postRouter)
app.use('/addDieviant', uploadRoute)
app.use("/comments",commentRouter)
app.use("/admin",adminRouter)
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db connected");
    console.log("server  is connected");
  } catch (error) {
    console.log(error);
  }
});
