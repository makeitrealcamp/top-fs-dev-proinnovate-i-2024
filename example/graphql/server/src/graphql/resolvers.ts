
import { Users } from '../mongoose';
import { Comments } from '../mongoose/comments.schema';
import { Posts } from '../mongoose/posts.schema';

export const resolvers = {
  Query: {
    users: () => Users.find().populate('posts'),
    user: (_, { id }: { id: string }) => Users.findById(id),
    posts: () => Posts.find().populate('author'),
    post: (_, { id }: { id: string }) => Posts.findById(id),
    comments: () => Comments.find(),
    comment: (_, { id }: { id: string }) => Comments.findById(id),
  },
  Mutation: {
    register: async (
      _,
      {
        email,
        password,
        name,
      }: { email: string; password: string; name: string },
    ) => {

      const user = new Users({
        email,
        password,
        name,
        createdAt: new Date(),
        updatedAt: new Date(),
        posts: [],
        comments: [],
      });
      console.log({ user });

      await user.save();

      return { token: 'token', user };
    },
    createPost: async (
      _,
      { title, content }: { title: string; content: string },
    ) => {

      // token = 'token'; 
      // get the user id from the token
      const user = await Users.findById('671ade6c08fc2d7b30f5c34d');
      console.log({ user });
      if (!user) {
        throw new Error('User not found');
      }
      const post = new Posts({
        title,
        content,
        author: user._id,
        published: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        comments: [],
      });
      console.log({ post });

      user.posts.push(post._id);

      await Users.findByIdAndUpdate(user._id, user);
      await post.save();
      return post;
    },
    deletePost: async (_, { id }: { id: string }) => {
      try {
        await Posts.findByIdAndDelete(id);
        return true;
      } catch (error) {
        throw new Error('Post not found');
      }
    },
  },
};
