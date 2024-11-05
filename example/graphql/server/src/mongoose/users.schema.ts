import mongoose, { Document } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  name: string;
  createdAt: Date;
}

export const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }],
});

export const Users = mongoose.model('Users', userSchema);
