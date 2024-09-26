import { useCounter } from './Context';

export const StepInput = () => {
  const { step, setStep } = useCounter();

  const handleStepChange = (event) => {
    setStep(Number(event.target.value) || 1); // Asegura que el valor sea un número
  };

  return (
    <div className="my-5">
      <input
        type="number"
        value={step}
        onChange={handleStepChange}
        placeholder="Define el valor de incremento"
        className="text-lg p-2"
      />
    </div>
  );
};

export default StepInput;
