// Props Object
// objectos javascript que pueden contener propiedades y metodos.
// permitir pasar datos mas complejos a componente

// product = { name: "Smartphone", price: 1000, stock: 5 }
import PropTypes from 'prop-types';

export const ChildB = (props) => {
  const { product } = props;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

ChildB.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number,
  }).isRequired,
};

export default ChildB;
