export const CardProduct = ({ name, description, price, url }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>$ {price}</p>
      <button>Ir al detalle</button>
      <button style={{ backgroundColor: 'red' }}> Delete </button>
    </div>
  );
};

export default CardProduct;
