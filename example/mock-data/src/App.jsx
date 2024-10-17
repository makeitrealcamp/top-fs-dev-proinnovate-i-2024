import CardProduct from './components/Card';
import Register from './components/Register';
import { getAllNotes } from './services/notes';
import Login from './components/Login';

import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const getData = async () => {
      const data = await getAllNotes();

      console.log(data);
    };

    getData();
  }, []);

  return (
    <>
      <Register />
      <Login />
    </>
  );
}

export default App;
