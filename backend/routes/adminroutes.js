const express = require('express');
const adminRouter = express.Router();
const { UserModel } = require('../model/user.Model');
const { authAdmin } = require('../middleware/auth.middleware');
const { CommentModel } = require('../model/comment.model');
const { PostModel } = require('../model/post.model');

// Define the admin endpoint for suspending a user
adminRouter.patch('/suspend/:userId', authAdmin, async (req, res) => {
  try {
    // Check if the authenticated user is an admin
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Unauthorized. You are not an admin.' });
    }

    // Get the user ID to be suspended from the request parameters
    const userId = req.params.userId;

    // Find the user by ID
    const userToSuspend = await UserModel.findById(userId);

    // Check if the user exists
    if (!userToSuspend) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Update the user's account status to "Suspended"
    userToSuspend.account_Status = 'Suspended';
    await userToSuspend.save();

    return res.status(200).json({ message: 'User suspended successfully.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});


// Define the admin endpoint for deleting a user
adminRouter.delete('/delete/:userId', authAdmin, async (req, res) => {
    try {
      // Check if the authenticated user is an admin
      if (req.user.role !== 'Admin') {
        return res.status(403).json({ message: 'Unauthorized. You are not an admin.' });
      }
  
      // Get the user ID to be deleted from the request parameters
      const userId = req.params.userId;
  
      // Find the user by ID
      const userToDelete = await UserModel.findById(userId);
  
      // Check if the user exists
      if (!userToDelete) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      // Delete the user
      await UserModel.findByIdAndDelete(userId);
  
      return res.status(200).json({ message: 'User deleted successfully.' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  });
  

  // Define the admin endpoint for getting all user data
adminRouter.get('/users', authAdmin, async (req, res) => {
    try {
      // Check if the authenticated user is an admin
      if (req.user.role !== 'Admin') {
        return res.status(403).json({ message: 'Unauthorized. You are not an admin.' });
      }
  
      // Retrieve all user data
      const users = await UserModel.find({ role: 'User' });
  
      return res.status(200).json({ users });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  });

  // delete the post

  adminRouter.delete('/delete-post/:postId', async (req, res) => {
    try {
      const postId = req.params.postId;
  
      // First, delete the post
      await PostModel.findByIdAndDelete(postId);
  
      // Next, find and delete associated comments
      await CommentModel.deleteMany({ post: postId });
  
      res.json({ success: true, message: 'Post and associated comments deleted successfully.' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

//   coment delete
  adminRouter.delete('/delete-comment/:commentId', authAdmin, async (req, res) => {
    try {
      // Check if the authenticated user is an admin
      if (req.user.role !== 'Admin') {
        return res.status(403).json({ message: 'Unauthorized. You are not an admin.' });
      }
  
      // Get the comment ID to be deleted from the request parameters
      const commentId = req.params.commentId;
  
      // Find the comment by ID
      const commentToDelete = await CommentModel.findById(commentId);
  
      // Check if the comment exists
      if (!commentToDelete) {
        return res.status(404).json({ message: 'Comment not found.' });
      }
  
      // Get the post ID associated with the comment
      const postId = commentToDelete.postId;
  
      // Delete the comment
      await CommentModel.findByIdAndDelete(commentId);
  
      // Update the post model to remove the comment ID from the commentId array
      await PostModel.findByIdAndUpdate(postId, { $pull: { commentId: commentId } });
  
      return res.status(200).json({ message: 'Comment deleted successfully.' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = {
   adminRouter
}
 ;
