import { useState, useEffect } from 'react';

import Form from './components/Form';
import Item from './components/item';
import Loading from './components/Loading';

import './App.css';
const apiURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleReadOne = async () => {
    const random = Math.floor(Math.random() * 10) + 1;
    const url = `https://jsonplaceholder.typicode.com/users/${random}`;
    const config = {
      method: 'GET',
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      setUser(data); // asigna el valor al estado y genera un nuevo renderizado (pintado)
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const config = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    const userToCreate = {
      name: 'Cirsitna Moreno',
      username: 'khriztianmorneo',
      email: 'khriztianmorneo@april.biz',
    };

    const url = 'https://jsonplaceholder.typicode.com/users/2';
    const config = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(userToCreate),
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/2';
    const config = {
      method: 'DELETE',
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const url = `${apiURL}/api/users`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log({
          data,
        });
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>React Fetch</h1>

      <Form user={user} />

      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {users.map((user, idx) => (
            <Item
              key={`${user.id}-${idx}`}
              user={user}
              onSelectUser={setUser}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
