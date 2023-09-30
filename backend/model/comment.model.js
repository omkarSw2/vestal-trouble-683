const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    title:{type:String,required:true},
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, ref:'user'
    },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    createdat:{type:String,default:Date.now()}
  }, {
    versionKey: false
  });
const CommentModel = mongoose.model("comments", commentSchema);
module.exports = {
  CommentModel,
};
