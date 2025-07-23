function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  /* let nuevoArray = [];
  for( let i = 0; i < array.length; i++ ){
    nuevoArray.push(array[i] * i);
  }
  return array */
  return array.map((elemento, indice) => elemento * indice);
}

module.exports = multiplicarElementosPorIndice;
