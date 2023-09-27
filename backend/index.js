const express=require("express")
const { connection } = require("mongoose")
const { UserModel } = require("./model/user.model")
const { userRouter } = require("./routes/userroutes")
require("dotenv").config();
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/user",userRouter);

app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("db connected")
        console.log("server  is connected")
    } catch (error) {
        console.log(error)
    }
})