const mongoose=require("mongoose")

const useSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: String,
    email: { type: String, unique: true, required: true },
    pass: { type: String, required: true },
    phone: String,
    date: { type: String, required: true },
});

const UserModel=mongoose.model("users",useSchema)
module.exports={
    UserModel,
}
