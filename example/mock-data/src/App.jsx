import CardProduct from './components/Card';
import Register from './components/Register';

import './App.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 12,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description 2',
    price: 22,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description 3',
    price: 32,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description 4',
    price: 42,
  },
];

function App() {
  console.log(import.meta.env.VITE_API_URL);
  return (
    <>
      <Register />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default App;
