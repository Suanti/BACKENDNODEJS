const { agregarSerie, listarSeries, actualizarTemporadas } = require('./2series');

// Agregar series
agregarSerie("Breaking Bad", 5);
agregarSerie("Friends", 10);

// Listar
listarSeries();

// Actualizar
actualizarTemporadas("Friends", 12);

// Volver a listar para ver cambios
listarSeries();