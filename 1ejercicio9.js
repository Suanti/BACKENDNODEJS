// Ejercicio 9: Números únicos 🔄
// Escribe una función que reciba un array de números y devuelva un nuevo
// array sin números repetidos.
// Consigna:
//  Usa el objeto Set para eliminar duplicados.
//  Convierte el Set a un array usando el operador spread (...).

const numerosUnicos = (array) => {
    return [...new Set(array)];
  };
  
  // Ejemplo:
  const numeros = [1, 2, 2, 3, 4, 4, 5];
  console.log(numerosUnicos(numeros)); //  Salida: [1, 2, 3, 4, 5]

  
// Set guarda solo valores únicos.
//  Luego, [...set] convierte el conjunto de nuevo en array.