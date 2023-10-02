const express = require("express");
const { connection } = require("mongoose");
const { UserModel } = require("./model/user.Model");
const { userRouter } = require("./routes/userroutes");

const swaggerUi = require('swagger-ui-express');


require("dotenv").config();

const cors = require("cors");
const { postRouter } = require("./routes/postroutes");
const { commentRouter } = require("./routes/commentroute");

const { adminRouter } = require("./routes/adminroutes");

const {UploadModel} = require('./model/uploadModel')
const {uploadRoute} = require('./routes/UpladRoutes');
const specs = require("./routes/swaggerOptions");


const app = express();
app.use(express.json());
app.use(cors());
// swagger middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// upload 
app.use('/uploads', express.static('uploads'));

app.get("/", (req, res) => {
  res.send("hello");
});
// user routes 
app.use("/users", userRouter);
// post routes
app.use("/posts",postRouter)
// upload
app.use('/addDieviant', uploadRoute)
// comments routes
app.use("/comments",commentRouter)
// admin routes
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
