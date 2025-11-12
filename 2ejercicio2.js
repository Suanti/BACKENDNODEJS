// Ejercicio 2: Conversión de Objetos JavaScript a JSON
// 1.En la misma carpeta clase2, crea un nuevo archivo llamado actividad2.js.
// 2.Crea un objeto en JavaScript que represente a un estudiante con las siguientes propiedades: nombre, edad, curso, notas (un array de números).
// Instrucciones:
// • Convierte este objeto a una cadena JSON usando JSON.stringify().
// • Muestra la cadena JSON en la consola.
// • Luego, convierte la cadena JSON de nuevo a un objeto utilizando JSON.parse() y muestra el objeto en la consola.

// Ejercicio 2: Conversión de Objetos JavaScript a JSON

// 1. Crear un objeto estudiante
const estudiante = {
    nombre: "María González",
    edad: 20,
    curso: "Programación Web",
    notas: [85, 92, 78, 90, 88]
};
console.log(estudiante);


// 2. Convertir el objeto a cadena JSON usando JSON.stringify()
const estudianteJSON = JSON.stringify(estudiante);

// 3. Convertir la cadena JSON de vuelta a objeto usando JSON.parse()
const estudianteObjeto = JSON.parse(estudianteJSON);
