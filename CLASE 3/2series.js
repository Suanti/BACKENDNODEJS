const fs = require('fs');

const rutaArchivo = './series.json';

// Leer el archivo JSON o devolver [] si no existe
function leerSeries() {
    if (!fs.existsSync(rutaArchivo)) {
        return []; 
    }

    const data = fs.readFileSync(rutaArchivo, 'utf-8');
    return JSON.parse(data);
}

// Guardar series en el archivo JSON
function guardarSeries(series) {
    fs.writeFileSync(rutaArchivo, JSON.stringify(series, null, 2));
}

// 1. Registrar una serie
function agregarSerie(nombre, temporadas) {
    const series = leerSeries();

    // Verificar si ya existe
    const existe = series.find(s => s.nombre.toLowerCase() === nombre.toLowerCase());
    if (existe) {
        console.log(`⚠️ La serie "${nombre}" ya está registrada.`);
        return;
    }

    series.push({ nombre, temporadas });
    guardarSeries(series);
    console.log(`🎬 Serie agregada: ${nombre} (${temporadas} temporadas)`);
}

// 2. Listar las series
function listarSeries() {
    const series = leerSeries();

    if (series.length === 0) {
        console.log("📭 No hay series registradas.");
        return;
    }

    console.log("📺 Series registradas:");
    series.forEach((serie, i) => {
        console.log(`${i + 1}. ${serie.nombre} — ${serie.temporadas} temporadas`);
    });
}

// 3. Actualizar temporadas
function actualizarTemporadas(nombre, nuevasTemporadas) {
    const series = leerSeries();

    const serie = series.find(s => s.nombre.toLowerCase() === nombre.toLowerCase());

    if (!serie) {
        console.log(`❌ No se encontró la serie "${nombre}".`);
        return;
    }

    serie.temporadas = nuevasTemporadas;
    guardarSeries(series);
    console.log(`🔁 Temporadas actualizadas para "${nombre}": ahora tiene ${nuevasTemporadas} temporadas.`);
}

module.exports = { agregarSerie, listarSeries, actualizarTemporadas };