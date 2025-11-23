const fs = require('fs');

const rutaArchivo = './libros.json';

// Leer archivo JSON o devolver array vacío
function leerLibros() {
    if (!fs.existsSync(rutaArchivo)) {
        return [];  // si no existe el archivo, empezamos con array vacío
    }

    const data = fs.readFileSync(rutaArchivo, 'utf-8');
    return JSON.parse(data);
}

// Guardar libros en el archivo JSON
function guardarLibros(libros) {
    fs.writeFileSync(rutaArchivo, JSON.stringify(libros, null, 2));
}

// 1. Agregar un libro
function agregarLibro(nombre) {
    const libros = leerLibros();
    libros.push({ nombre });
    guardarLibros(libros);
    console.log(`📘 Libro agregado: ${nombre}`);
}

// 2. Listar los libros
function listarLibros() {
    const libros = leerLibros();

    if (libros.length === 0) {
        console.log("📭 No hay libros registrados.");
        return;
    }

    console.log("📚 Lista de libros favoritos:");
    libros.forEach((libro, i) => {
        console.log(`${i + 1}. ${libro.nombre}`);
    });
}

module.exports = { agregarLibro, listarLibros };