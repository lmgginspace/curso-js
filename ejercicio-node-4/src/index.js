import { contarJuegos, calcularPrecioTotal, juegosDisponibles, crearResumen, buscarPorGenero } from './catalogo.js';
import { videojuegos } from './videojuegos.js';

console.log('Número total de juegos:', contarJuegos(videojuegos));
console.log('Precio total de los juegos:', calcularPrecioTotal(videojuegos), '€');
console.log('Juegos disponibles:', juegosDisponibles(videojuegos));
console.log('-- Resumen del catálogo --');
console.log(crearResumen(videojuegos));

const generoBuscado = 'RPG';
console.log(`-- Juegos del género ${generoBuscado} --`);
const resultadosBusqueda = buscarPorGenero(videojuegos, generoBuscado);

console.log(resultadosBusqueda);

const generoBuscado2 = 'Simulación';
console.log(`-- Juegos del género ${generoBuscado2} --`);
const resultadosBusqueda2 = buscarPorGenero(videojuegos, generoBuscado2);

console.log(resultadosBusqueda2);