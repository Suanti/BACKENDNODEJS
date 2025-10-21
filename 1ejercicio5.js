// Ejercicio 5: Generador de iniciales 🅰️
// Escribe una función que reciba un nombre completo y devuelva las
// iniciales en mayúsculas.
// Consigna:
//  Usa el método split() para dividir el nombre.
//  Usa un bucle for y métodos de string.

function generarIniciales(nombreCompleto) {
    const palabras = nombreCompleto.split(" "); // divide por espacios
    let iniciales = "";
  
    for (let i = 0; i < palabras.length; i++) {
      iniciales += palabras[i][0].toUpperCase(); // toma la primera letra de cada palabra
    }
  
    return iniciales;
  }

let nombre= "Suanti Katalina Bernal Ortiz"

console.log(generariniciales(nombre))


// OTRA OPCIÓN.
const generarIniciales = (nombre) =>
    nombre
      .split(" ")
      .map(palabra => palabra[0].toUpperCase())
      .join("");
  
  console.log(generarIniciales("Suanti Katalina Bernal Ortiz"));