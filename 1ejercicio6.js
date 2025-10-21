// Ejercicio 6: Calculadora de promedio 📊
// Escribe una función que reciba un array de números y devuelva el
// promedio.
// Consigna:
//  Usa un bucle for para sumar los números.
//  Divide la suma total entre la cantidad de elementos del array.

let calificaciones = [ 60, 75, 83, 92, 100, 45, 56]
function promedio(calificaciones) {
    let suma = 0;
  
    for (let i = 0; i < calificaciones.length; i++) {
      suma += calificaciones[i]; // sumamos cada elemento
    }
  
    let promedioFinal = suma / calificaciones.length;
    return promedioFinal;
  }
  
  console.log(promedio(calificaciones)); // 💡 Salida: 73



  // OTRA OPCIÓN 
 const promedio = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(promedio(calificaciones)); // 73