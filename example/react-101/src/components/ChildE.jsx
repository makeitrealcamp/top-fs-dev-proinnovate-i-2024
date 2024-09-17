// Props children
// Los props children son una forma de pasar elementos hijos a un componente.
// componente mas complejos o reutilizables que necesitan renderizar elementos hijos

import PropTypes from 'prop-types';

export const ChildE = (props) => {
  const { children } = props;

  return <div className="modal">{children}</div>;
};

ChildE.propTypes = {
  children: PropTypes.node,
};

export default ChildE;
