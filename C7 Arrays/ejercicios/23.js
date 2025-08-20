function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  let lista = [];
  let suma = num;
  for(let i = 0; i < 10; i++ ){
    suma += 2;
    if(suma === i){
      return "Se interrumpió la ejecución";
    }
    lista.push(suma);
  }
  return lista;
}

module.exports = breakStatement;
