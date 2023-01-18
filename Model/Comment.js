import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Comment = mongoose.model("comments", CommentSchema);
export default Comment;
