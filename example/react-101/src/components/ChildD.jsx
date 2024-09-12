// Props de funciones

// funciones que pueden ser pasada como props para permitir la interaccion entre componentes
// se utiliza para menajear eventos, callback o para personar el compartamiento de un componente
import PropTypes from 'prop-types';

export const ChildD = (props) => {
  const { onHandleClick } = props;

  return <button onClick={onHandleClick}>Click me!!</button>;
};

ChildD.propTypes = {
  /**
   * Función que se ejecuta al hacer click
   */
  onHandleClick: PropTypes.func.isRequired,
};

export default ChildD;
