// Ejercicio 3: Ordenando números 🔢
// Crea una función que reciba un array de números y devuelva un nuevo
// array con los números ordenados de menor a mayor.
// Consigna:
//  Usa el método sort().

let numeros = [2, 4, 5, 8, 10, 3, 9];

function ordenar(array) {
  // Creamos una copia para no modificar el array original
  const resultado = [...array];

  // sort() compara los elementos y los ordena
  resultado.sort(function(a, b) {
    return a - b; // orden de menor a mayor
  });

  return resultado;
}

console.log(ordenar(numeros)); // [2, 3, 4, 5, 8, 9, 10]



//PROFE 

// definimos el array de números
// let numeros = [34, 7, 23, 32, 5, 62];

// // función para ordenar los números
// function ordenarNumeros(numeros) {
//   return numeros.sort((a, b) => a - b); // a-b para orden ascendente 

// }

// // probamos la función
// console.log(ordenarNumeros(numeros)); // Debería devolver [5, 7, 23, 32, 34, 62]

// // otra forma de hacerlo con bucle for
// function ordenarNumerosConBucle(numeros) {
//   let n = numeros.length; // obtenemos la longitud del array
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (numeros[j] > numeros[j + 1]) {
//                 // intercambiamos
//                 let temp = numeros[j];// guardamos el valor actual 34 
//                 numeros[j] = numeros[j + 1]; // asignamos el valor siguiente 7 , 23
//                 numeros[j + 1] = temp;// asignamos el valor guardado 34 [ 5, 7, 23, 32, 34, 62];
//             }
//         }

//     return numeros;
// }
// }
// console.log(ordenarNumerosConBucle(numeros)); // Debería devolver [5, 7, 23, 32, 34, 62]