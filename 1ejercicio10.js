// Ejercicio 10: Invertir palabras 🔄
// Crea una función que reciba una cadena de texto y devuelva otra cadena
// con las palabras en orden inverso.
// Consigna:
//  Usa el método split() para separar las palabras.
//  Usa el método reverse() para invertir el array.
//  Usa el método join() para unir las palabras en una nueva cadena.

const invertirPalabras = (texto) => {
    return texto.split(" ").reverse().join(" ");
  };
  
  // Ejemplo:
  console.log(invertirPalabras("Hola cómo estás hoy"));
  //  Salida: "hoy estás cómo Hola"
  
  
//   split(" ") → separa el texto en un array de palabras.
  
//   reverse() → invierte el orden.
  
//   join(" ") → une las palabras de nuevo en una cadena.