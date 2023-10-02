const mongoose = require('mongoose')


const uploadSchema = mongoose.Schema({
    images: [String],
})

const UploadModel = mongoose.model("uploadPost", uploadSchema)

module.exports={
    UploadModel
}