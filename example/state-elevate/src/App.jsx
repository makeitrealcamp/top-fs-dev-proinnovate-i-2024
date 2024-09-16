import { useState } from 'react';
import PasswordGenerator from './components/PasswordGenerator';

import './App.css';

const generateButtons = () => {
  const numbers = [...Array(9)]
    .map((_, i) => i + 1)
    .sort(() => Math.random() - 0.5);

  return numbers;
};

function App() {
  const [randomSeq] = useState(generateButtons());
  const [password, setPassword] = useState('');

  const handleUpdatePassword = (number) => {
    setPassword(password + number);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <p>Contraseña: {password}</p>
      <PasswordGenerator
        numbers={randomSeq}
        onUpdatePassword={handleUpdatePassword}
      />
    </>
  );
}

export default App;
