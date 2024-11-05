import { useEffect, useState } from 'react';
import { usePostStore } from '../store/postStore';
import { CreatePost } from '../components/CreatePost';
import { PostCard } from '../components/PostCard';
import axios from 'axios';
import { gql, useQuery } from '@apollo/client';
import { Post } from '../types';
import { GET_POST, GET_POSTS } from '../graphql/queries';

import { client } from '../graphql/client';
import { DELETE_POST_BY_ID } from '../graphql/mutations';

type PostResponse = {
  posts: Post[];
};

export function Feed() {
  // const {
  //   posts,
  //   loading,
  //   currentPage,
  //   totalPages,
  //   fetchPosts,
  //   setPage,
  //   deletePost,
  // } = usePostStore();

  // const { data, loading, error, refetch } = useQuery<PostResponse>(GET_POSTS,{
  //   fetchPolicy: 'network-only',
  //   pollInterval: 5000,}

  // useQuery(GET_POST, {
  //   variables: {
  //     id: '',
  //   },
  // });

  // useEffect(() => {
  //   fetchPosts(currentPage);
  // }, [currentPage]);

  // if (loading) {
  //   return <h2>loading posts...</h2>;
  // }
  // if (error) {
  //   return <h2>error fetching posts</h2>;
  // }

  // const { posts } = data as PostResponse;
  const [posts, setPosts] = useState<Post[]>([]);

  const deletePost = async (postId: string) => {
    await axios.post('http://localhost:3000/graphql', {
      query: DELETE_POST_BY_ID,
      variables: { id: '67296cb62caaeb942052e322' },
    });
  };

  const GET_ALL_POSTS = `
      query {
        posts {
          id
          title
          content
          author {
            id
            name
          }
        }
      }
    `;

  const fetchPosts = async () => {
    axios
      .post('http://localhost:3000/graphql', {
        query: GET_ALL_POSTS,
      })
      .then((res) => {
        // console.log(res.data.data.posts);
        setPosts(res.data.data.posts);
      });
    // Using Apollo Client
  };

  const fetchUsingApollo = async () => {
    const posts = await client.query({
      query: GET_POSTS,
    });
    console.log({ posts });
  };

  useEffect(() => {
    fetchPosts();
    fetchUsingApollo();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <CreatePost />

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onDelete={deletePost} />
        ))}
      </div>
      {/* 
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white border rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white border rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )} */}
    </div>
  );
}
