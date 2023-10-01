const express = require('express')
const fs = require('fs');
const path = require('path');
const {UploadModel} = require('../model/uploadModel')

const multer = require('multer')

const uploadRoute = express.Router()


const storage = multer.diskStorage({
    destination: './uploads', // Set the destination folder for uploaded files
    filename: (req, file, callback) => {
      callback(null,  file.originalname);
    },
  });

const upload = multer({ storage: storage });


uploadRoute.post('/uploads', upload.array('photos', 5),  async(req, res)=>{
    // console.log("&&&&");

    try {
        console.log("++++++++++++++++++++++++++");
        const files = req.files;
        // console.log(req.body);
        // console.log(files);

    // Move each file to the uploads directory
    files.forEach(file => {
      const destination = path.join(__dirname, '..', 'uploads', file.originalname);
      fs.renameSync(file.path, destination);
    });

    const fileUrls = files.map(file => {
        return `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
      });

      req.body.images=fileUrls
      console.log(req.body.images);
      const we = UploadModel(req.body)
      await we.save()

    res.send("Data Uploaded Successfully");
    } catch (error) {
        res.send(error)
    }

})


module.exports = {
    uploadRoute
}