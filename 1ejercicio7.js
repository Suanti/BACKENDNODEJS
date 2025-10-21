// Ejercicio 7: Filtrar palabras largas ✍️
// Escribe una función que reciba un array de palabras y un número, y
// devuelva las palabras que tienen más caracteres que el número dado.
// Consigna:
//  Usa el método filter().
//  Usa una función flecha para simplificar el código.

const filtrarPalabrasLargas = (palabras, longitudMinima) => {
    return palabras.filter(palabra => palabra.length > longitudMinima);
  };
  
  // Ejemplo:
  let palabras = ["sol", "montaña", "mariposa", "flor", "estrella"];
  console.log(filtrarPalabrasLargas(palabras, 4));// ["montaña", "mariposa", "estrella"]
 
  // FiltrarPalabrasLargas ( palabras, número de lóngitud mínima)