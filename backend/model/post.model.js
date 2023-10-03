const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    postimage: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user", // This should match the model name 'user'
      required: true,
    },
    commentId: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    title: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);
const PostModel = mongoose.model("post", postSchema);
module.exports = {
  PostModel,
};
