// ACTIVIDAD 4
// gestionEstudiantes.js

// Importamos el array desde estudiantes.js
const estudiantes = require('./estudiantes.js');

// 1️⃣ Mostrar los nombres de todos los estudiantes
console.log("Lista de estudiantes:");
estudiantes.forEach(est => console.log(`- ${est.nombre}`));

// 2️⃣ Calcular y mostrar el promedio de notas de un estudiante específico
const nombreBuscado = "Martín Gómez"; // Podés cambiar este nombre
const estudiante = estudiantes.find(est => est.nombre === nombreBuscado);

if (estudiante) {
  const promedio = estudiante.notas.reduce((a, b) => a + b, 0) / estudiante.notas.length;
  console.log(`\nPromedio de ${estudiante.nombre}: ${promedio.toFixed(2)}`);
} else {
  console.log(`\nNo se encontró al estudiante ${nombreBuscado}.`);
}

// 3️⃣ Agregar un nuevo estudiante al array
const nuevoEstudiante = {
  nombre: "Carlos Fernández",
  edad: 24,
  curso: "Introducción a JavaScript",
  notas: [7, 8, 9, 8]
};

estudiantes.push(nuevoEstudiante);

// 4️⃣ Mostrar el array actualizado en formato JSON
console.log("\nLista actualizada de estudiantes:");
console.log(JSON.stringify(estudiantes, null, 2));