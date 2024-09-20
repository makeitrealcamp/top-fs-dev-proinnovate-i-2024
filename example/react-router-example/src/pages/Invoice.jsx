import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const InvoicePage = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      setposts(data);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Invoice Page</h1>
      <ul>
        <li>hola mundo</li>
        {posts.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/detail/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InvoicePage;
