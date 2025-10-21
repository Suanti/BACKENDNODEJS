// Ejercicio 4: Contando vocales 🅰️🅾️
// Crea una función que reciba una cadena de texto y devuelva cuántas
// vocales contiene.
// Consigna:
//  Usa un bucle for y condicionales.
//  Considera vocales mayúsculas y minúsculas (a, e, i, o, u).

// definimos la cadena de texto
let texto = "Hola KATA, este es Un Ejercicio de JavaScript";

// función para contar las vocales
function contarVocales(texto) {
  let contador = 0; // inicializamos el contador
  let vocales = "aeiouAEIOU"; // definimos las vocales
    for (let i = 0; i < texto.length - 1; i++) {
      if (vocales.includes(texto[i])) {
        contador++;
      }
    }
  return contador;
}

// probamos la función
console.log(contarVocales(texto)); // Debería devolver 17


// vocales separadas
function contarVocalesmin(texto) {
  let contador = 0; // inicializamos el contador
  
  let vocalesmin = "aeiou"; // definimos las vocales
  
  for (let i = 0; i < texto.length - 1; i++) {
    if (vocalesmin.includes(texto[i]) ) {
      contador++; // incrementamos el contador si encontramos una vocal
    }
  }
  return contador;
}

function contarVocalesmay(texto) {
  let contador = 0; // inicializamos el contador
  let vocalesMay = "AEIOU"; // definimos las vocales
    for (let i = 0; i < texto.length - 1; i++) {    
        if (vocalesMay.includes(texto[i]) ) {
            contador++; // incrementamos el contador si encontramos una vocal
        }
    }
    return contador;
}



// probamos la función
console.log(contarVocalesmin(texto)); // Debería devolver 13
console.log(contarVocalesmay(texto)); // Debería devolver 4