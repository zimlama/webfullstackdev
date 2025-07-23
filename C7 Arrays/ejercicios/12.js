function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(function (elemento) {
    if (typeof elemento === "string") {
      return elemento.toUpperCase();
    } else {
      return elemento; // deja sin cambio si no es string
    }
  });
}

module.exports = convertirStringAMayusculas;
