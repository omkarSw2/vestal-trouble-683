const express = require("express");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PostModel } = require("../model/post.model");
const { auth } = require("../middleware/auth.middleware");


const postRouter=express.Router()

postRouter.get("/",async(req,res)=>{
try {
    const posts = await PostModel.find().populate({
        path: 'userId',
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
})
// / GET /api/posts/:postId: Retrieve a specific post by ID.
postRouter.get("/:postId",async(req,res)=>{
    const postId=req.params.postId
    try {
        const post=await PostModel.findOne({_id:postId})
        if(!post){
            return res.status(400).json({msg:"There is no  post with this id"})
        }
        res.status(200).json({data:post})
    } catch (error) {
        res.status(400).json({error:error})
    }
})

// POST /api/posts: Create a new post (requires authentication).
postRouter.post("/create",auth,async(req,res)=>{
    const payload = req.body;
  try {
   
    const post = new PostModel(payload);
    await post.save();
    res.status(200).json({ msg: "post is cretaed" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
})

// PUT /api/posts/:postId: Update a post (requires authentication).
postRouter.patch("/update/:postId",auth,async(req,res)=>{
    console.log("hh")
    try {
        const {postId}=req.params;
        const {postimage,title}=req.body;
        const post=await PostModel.findById(postId);
       if(!post){
        return res.status(404).json({msg:"post not found"})
       }
       if(post.username!==req.body.username){
        return res.status(403).json({msg:"you are not authorised"})
       }
       if(title){
        post.title=title
       }
       if(postimage){
        post.postimage=postimage
       }
      
       await post.save();
       res.status(200).json({msg:"post updated"})
      } catch (error) {
        res.status(400).json({msg:"something went wrong in the internet"})
      }
})

// DELETE /api/posts/:postId: Delete a post (requires authentication).
postRouter.delete("/delete/:id",auth,async(req,res)=>{
    try {
        const {id}=req.params;
       
        const post=await PostModel.findById(id);
       if(!post){
        return res.status(404).json({msg:"post not found"})
       }
       if(post.userId!==req.body.userId){
        return res.status(403).json({msg:"you are not authorised"})
       }
      await PostModel.findByIdAndDelete(id)
       res.status(200).json({msg:"post deleted"})
      } catch (error) {
        res.status(400).json({msg:"something went wrong in the internet"})
      }
})

module.exports={
    postRouter,
}




// Post Management Endpoints:

// GET /api/posts: Retrieve all posts.




