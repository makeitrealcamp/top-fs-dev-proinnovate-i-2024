import { useCounter } from './Context';

export const CounterButtons = () => {
  const { increment, decrement } = useCounter();

  return (
    <div className="w-full flex justify-between gap-3">
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default CounterButtons;
