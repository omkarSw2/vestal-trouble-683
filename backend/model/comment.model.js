const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    title:{type:String,required:true},
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    createdat:{type:String,default:Date.now()},
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, ref:'user'
    },
   
  }, {
    versionKey: false
  });
const CommentModel = mongoose.model("comment", commentSchema);
module.exports = {
  CommentModel,
};
