import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  postId: { type: String, required: true },
});

export const Comments = mongoose.model("Comments", commentSchema);