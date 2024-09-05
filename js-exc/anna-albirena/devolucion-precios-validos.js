// Se agregó la validacion del tipo de price

function hasValidPrice(product) {
  if (product && typeof product.price === 'number' && product.price >= 0) {
    return true;
  } else {
    return false;
  }
}
