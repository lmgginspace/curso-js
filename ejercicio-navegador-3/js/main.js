import { productos } from './productos.js';
import { contarProductos, calcularPrecioTotal, obtenerNombres, crearTextoResumen } from './utilidadesProductos.js';

// Mostrar número total de productos.
const totalProductosElement = document.getElementById('total-productos');
const totalProductosParagraph = document.createElement('p');
totalProductosParagraph.textContent = `Número total de productos: ${contarProductos(productos)}`;
totalProductosElement.appendChild(totalProductosParagraph);

// Mostrar precio total de todos los productos.
const precioTotalElement = document.getElementById('precio-total');
const precioTotalParagraph = document.createElement('p');
precioTotalParagraph.textContent = `Precio total (todos los productos): $${calcularPrecioTotal(productos)}`;
precioTotalElement.appendChild(precioTotalParagraph);

// Mostrar lista de nombres de productos.
const nombresElement = document.getElementById('nombres-productos');
const nombres = obtenerNombres(productos);
nombres.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    nombresElement.appendChild(li);
});

// Mostrar resumen de productos.
const resumenElement = document.getElementById('resumen');
const resumenParagraph = document.createElement('p');
resumenParagraph.textContent = crearTextoResumen(productos);
resumenElement.appendChild(resumenParagraph);
