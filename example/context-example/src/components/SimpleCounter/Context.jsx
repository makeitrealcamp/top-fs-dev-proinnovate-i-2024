import { createContext, useContext, useState } from 'react';

// 1. Crear el contexto
const CounterContext = createContext();

// 2. Crear un Provider que envuelva a los componentes
export const CounterProvider = ({ children }) => {
  // Estado para el contador y el valor de incremento/decremento
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Función para manejar el incremento
  const increment = () => {
    setCount(count + step);
  };

  // Función para manejar el decremento
  const decrement = () => {
    setCount(count - step);
  };

  // 4. Valor del contexto
  const store = {
    count,
    step,
    increment,
    decrement,
    setStep,
  };

  // 3. Utilizar el Contexto para crear el provider
  return (
    <CounterContext.Provider value={store}>{children}</CounterContext.Provider>
  );
};

// CustomHook - Consumer
export const useCounter = () => {
  const context = useContext(CounterContext);

  return context;
};
