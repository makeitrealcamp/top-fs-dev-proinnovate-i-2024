import { useEffect, useState } from 'react';

import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

// useEffect(function, [dependencies])

// prop = {name: 'John', age: 20, hobby: 'football'}
export const HomePage = () => {
  let [count, setCount] = useState(0);

  // Default useEffect -> mounted -> updated
  useEffect(() => {
    console.log('rendered');
  });

  // useEffect -> mounted
  useEffect(() => {
    console.log('mounted 1');
  }, []);

  // useEffect -> mounted -> unmounted
  useEffect(() => {
    console.log('mounted 2');
    return () => {
      console.log('unmounted');
    };
  }, []);

  return (
    <>
      <div id="main">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <input type="text" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default HomePage;
