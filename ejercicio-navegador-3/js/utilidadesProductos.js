function contarProductos(lista) {
    return lista.length;
}

function calcularPrecioTotal(lista) {
    let total = 0;
    for (let producto of lista) {
        total += producto.precio;
    }
    return total;
}

function obtenerNombres(lista) {
    return lista.map(producto => producto.nombre);
}

function crearTextoResumen(lista) {
    const totalProductos = contarProductos(lista);
    const precioTotal = calcularPrecioTotal(lista);
    return `Total de productos: ${totalProductos}, Precio total: $${precioTotal}`;
}

export { contarProductos, calcularPrecioTotal, obtenerNombres, crearTextoResumen };