const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PostModel } = require("../model/post.model");
const { auth } = require("../middleware/auth.middleware");

const postRouter = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads", // Set the destination folder for uploaded files
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// post swagger
postRouter.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find()
      .populate({
        path: "userId",
      })
      .populate({
        path: "commentId",
        populate: {
          path: "userId", // Populate the userId field within each comment
          select: "firstname", // Select the 'username' field from the user data
        },
      });

    const postsWithComments = posts.map((post) => {
      return {
        _id: post._id,
        title: post.title,
        postimage: post.postimage,
        userId: post.userId,
        comments: post.commentId || [],
      };
    });

    res.status(200).json({ data: postsWithComments });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// search
postRouter.get("/search", async (req, res) => {
  try {
    // Get the search query from the request query parameters
    const { query } = req.query;

    // Search for posts by title
    const postsByTitle = await PostModel.find({
      title: { $regex: query, $options: "i" },
    });

    return res.status(200).json({ results: postsByTitle });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

// / GET /api/posts/:postId: Retrieve a specific post by ID.
postRouter.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  console.log(postId, "POSTID")
  try {
    const post = await PostModel.findOne({ _id: postId })
      .populate({
        path: "userId",
      })
      .populate({
        path: "commentId",
        populate: {
          path: "userId",
          select: "firstname",
        },
      });
    if (!post) {
      return res.status(400).json({ msg: "There is no  post with this id" });
    }
    res.status(200).json({ data: post });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

postRouter.post(
  "/create",
  upload.array("photos", 5),
  auth,
  async (req, res) => {
    // console.log("&&&&");

    try {
      console.log("++++++++++++++++++++++++++");
      const files = req.files;
      // console.log(req.body);
      // console.log(files);

      // Move each file to the uploads directory
      files.forEach((file) => {
        const destination = path.join(
          __dirname,
          "..",
          "uploads",
          file.originalname
        );
        fs.renameSync(file.path, destination);
      });

      const fileUrls = files.map((file) => {
        return `${req.protocol}://${req.get("host")}/uploads/${file.filename}`;
      });

      req.body.postimage = fileUrls[0];
      console.log(req.body.postimage);
      const urlObject = new URL(req.body.postimage);
      const filename = path.basename(urlObject.pathname);

      // Split the filename at the first space to get the title
      const parts = filename.split(" ");
      const title = parts[0];
      // console.log("Titile", title.split(".")[0]);
      // console.log("postimage", fileUrls[0]);
      // console.log("userId", req.user._id);
      // console.log("title", title);

      const we = PostModel({
        postimage: fileUrls[0], // Set the postimage to the URL of the uploaded file
        userId: req.user._id,
        title: title.split(".")[0],
        commentId: [],
      });
      await we.save();
      console.log("we ", we);

      res.status(200).send("Data Uploaded Successfully");
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

// PUT /api/posts/:postId: Update a post (requires authentication).
postRouter.patch("/update/:postId", auth, async (req, res) => {
  console.log("hh");
  try {
    const { postId } = req.params;
    const { postimage, title } = req.body;
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({ msg: "post not found" });
    }
    if (post.userId !== req.user._id) {
      return res.status(403).json({ msg: "you are not authorised" });
    }
    if (title) {
      post.title = title;
    }
    if (postimage) {
      post.postimage = postimage;
    }

    await post.save();
    res.status(200).json({ msg: "post updated" });
  } catch (error) {
    res.status(400).json({ msg: "something went wrong in the internet" });
  }
});

// DELETE /api/posts/:postId: Delete a post (requires authentication).
postRouter.delete("/delete/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;

    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).json({ msg: "post not found" });
    }
    if (post.userId !== req.body.userId) {
      return res.status(403).json({ msg: "you are not authorised" });
    }
    await PostModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "post deleted" });
  } catch (error) {
    res.status(400).json({ msg: "something went wrong in the internet" });
  }
});

module.exports = {
  postRouter,
};

// Post Management Endpoints:

// GET /api/posts: Retrieve all posts.
