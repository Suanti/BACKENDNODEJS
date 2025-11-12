// Ejercicio 1: Creación y Manipulación de un Objeto JSON
// 1.Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada clase2.
// 2.En la carpeta clase2, crea un archivo JavaScript llamado actividad1.js.
// 3.En este archivo, crea un objeto JSON que represente un libro. El objeto debe tener las siguientes propiedades: titulo, autor, año, genero (puede ser un array de géneros).
// Instrucciones:
// • Muestra en la consola el título y el autor del libro.
// • Actualiza el año del libro a un valor más reciente.
// • Añade una nueva propiedad llamada páginas que indique el número de páginas del libro.
// • Muestra el objeto actualizado en la consola.
/* 1 Importamos el módulo fs para trabajar con el sistema de archivos */
const fs = require('fs');

/* 2 Definimos la ruta del archivo JSON */
const rutaArchivo = './productos.json';

/* 3  leer el archivo JSON y mostrar su contenido actual */
fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    const productos = JSON.parse(data);
    console.log('Contenido actual del archivo:', productos);

    const nuevoProducto = {
    id: productos.length + 1,
    nombre: 'Camara',
    precio: 60
    };
    productos.push(nuevoProducto);
    console.log('Producto añadido:', nuevoProducto);


    const productosActualizados = JSON.stringify(productos, null, 2);
    fs.writeFile(rutaArchivo, productosActualizados, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir el archivo:', err);
            return;
        }
        console.log('Archivo actualizado correctamente.');
    });
});
