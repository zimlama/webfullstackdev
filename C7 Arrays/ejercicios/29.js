function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null; // si el array está vacío
  }

  // Ordenar el array (por si viene desordenado)
  numeros.sort((a, b) => a - b);

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i + 1] !== numeros[i] + 1) {
      return numeros[i] + 1; // el faltante es el siguiente al actual
    }
  }

  return null;
}

module.exports = encontrarNumeroFaltante;