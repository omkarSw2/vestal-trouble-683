const express=require("express")
const { CommentModel } = require("../model/comment.model");
const { PostModel } = require("../model/post.model");
const { auth } = require("../middleware/auth.middleware");

const commentRouter=express.Router()

// GET /api/posts/:postId/comments: Retrieve all comments for a specific post.
commentRouter.get("/:postId",async(req,res)=>{
    try {
        const postId = req.params.postId;
    
        // Find the post by postId (assuming you have a Post model)
        const post = await PostModel.findById(postId);
    
        if (!post) {
          return res.status(404).json({ message: 'Post not found' });
        }
    
        // Find comments associated with the post
        const comments = await CommentModel.find({ postId: postId });
    
        res.status(200).json(comments);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
})


// GET /api/comments/:commentId: Retrieve a specific comment by ID.

// POST /api/posts/:postId/comments: Create a new comment on a post (requires authentication).
commentRouter.post("/create/:postId",auth,async(req,res)=>{
    try {
        const postId = req.params.postId;
        const { title } = req.body;
    
      
        const newComment = new CommentModel({
          userId: req.user._id, 
          postId: postId, // Use the postId from the route parameter
          title: title,
          createdat: Date.now(),
        });
    
        // Save the new comment to the database
        await newComment.save();
    
        
        const post = await PostModel.findById(postId);
        if (!post) {
          return res.status(404).json({ message: "Post not found" });
        }
    
        // Add the comment's _id to the post's commentId array
        post.commentId.push(newComment._id);
        await post.save();
    
        res.status(201).json({ msg: "Comment created" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      }
})

module.exports={
    commentRouter,
}


// Comment Endpoints:


// GET /api/comments/:commentId: Retrieve a specific comment by ID.

// PUT /api/comments/:commentId: Update a comment (requires authentication).
// DELETE /api/comments/:commentId: Delete a comment (requires authentication).