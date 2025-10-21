// Ejercicio 2: El menú del día 🍽️
// Escribe una función que reciba un objeto con platos y precios, y devuelva
// los platos cuyo precio sea menor a $20.
// Consigna:
//  Usa un bucle for...in.
//  Usa objetos y arrays.
const menu = {
"Pasta": 10,
"Sushi": 25,
"Ajiaco": 15,
"Carne": 35,
"veggie": 20
};

function platosBaratos(menu) {
    const resultado = []; // acá guardamos los platos que cumplen la condición
  
    for (let plato in menu) {
      if (menu[plato] < 20) { // accedemos al precio con menu[plato]
        resultado.push(plato); // agregamos el nombre del plato al array
      }
    }
  
    return resultado;
  }
  
  console.log(platosBaratos(menu));