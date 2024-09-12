// Props primitivas
// Strings -> Texto
// Numbers -> Números
// Booleans -> Booleanos
// null y undefined -> valores null o indefinidos
import PropTypes from 'prop-types';

export const ChildA = (props) => {
  const { name, age = 18 } = props;
  return (
    <div>
      <p>
        Hola {name}! Tienes {age} años.
      </p>
    </div>
  );
};

ChildA.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

/**
 * @deprecated
 */
ChildA.defaultProps = {
  age: 18,
};

export default ChildA;
