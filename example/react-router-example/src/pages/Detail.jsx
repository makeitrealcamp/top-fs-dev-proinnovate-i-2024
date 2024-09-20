import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const DetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await response.json();
      setPost(data);
    };

    const getComments = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const data = await response.json();
      setComments(data);
    };

    getData();
    getComments();
  }, [postId]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailPage;
