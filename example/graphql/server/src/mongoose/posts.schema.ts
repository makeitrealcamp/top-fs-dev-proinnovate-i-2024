import mongoose, { Schema } from 'mongoose';

export const postsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  published: { type: Boolean },
  author: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  createdAt: { type: Date, default: Date.now() },
});

export const Posts = mongoose.model('Posts', postsSchema);
