import { useCounter } from './Context';

const DisplayCounter = () => {
  // 5. Consumir el contexto
  const { count } = useCounter();
  return <h1 className="text-3xl font-bold">Contador: {count}</h1>;
};

export default DisplayCounter;
