function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let lista = [];
  for(let i = 0; i < 11; i++){
    lista.push(i*6);
  }
  return lista;
}

module.exports = tablaDelSeis;
