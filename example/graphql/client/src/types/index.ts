export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  authorId: string;
  author: User;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  content: string;
  postId: string;
  authorId: string;
  author: User;
  createdAt: string;
  updatedAt: string;
}