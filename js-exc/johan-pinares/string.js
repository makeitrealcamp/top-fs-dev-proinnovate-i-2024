function capitalize (string) {
  return string[0].toUpperCase()+string.slice(1); //toma el primer valor y convierte en mayuscula luego concatena el resto de la cadena ya que anteriormente el valor de string no habia donde guardarlo entonces no se modificaba
}
console.log(capitalize("johan"))
console.log(capitalize("pinares"))
