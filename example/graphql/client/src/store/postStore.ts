import { create } from 'zustand';
import { Post } from '../types';
import { client } from '../graphql/client';
import { GET_POSTS } from '../graphql/queries';
import { CREATE_POST, DELETE_POST } from '../graphql/mutations';

interface PostState {
  posts: Post[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  updatePost: (post: Post) => void;
  deletePost: (postId: string) => void;
  setPage: (page: number) => void;
  fetchPosts: (page: number) => Promise<void>;
}

export const usePostStore = create<PostState>((set, get) => ({
  posts: [],
  currentPage: 1,
  totalPages: 1,
  loading: false,
  setPosts: (posts) => set({ posts }),
  addPost: async (post) => {
    await client.mutate({
      mutation: CREATE_POST,
      variables: {
        title: post.title,
        content: post.content,
      },
    });

    set({ posts: [post, ...get().posts] });
  },
  updatePost: (post) =>
    set({
      posts: get().posts.map((p) => (p.id === post.id ? post : p)),
    }),
  deletePost: async (postId) => {
    await client.mutate({
      mutation: DELETE_POST,
      variables: {
        id: postId,
      },
    });
    set({
      posts: get().posts.filter((p) => p.id !== postId),
    });
  },
  setPage: (page) => set({ currentPage: page }),
  fetchPosts: async (page) => {
    // Simulate API call
    const { data, loading } = await client.query({
      query: GET_POSTS,
    });
    console.log({ data });

    set({ posts: data.posts, loading, currentPage: page, totalPages: 5 });
  },
}));
