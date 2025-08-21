function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const vistos = new Set();
  for (let i = 0; i < numeros.length; i++) {
    const n = numeros[i];
    if (vistos.has(n)) return n;   // primer repetido
    vistos.add(n);
  }
  return undefined;
}

module.exports = encontrarElementoRepetido;