export function contarJuegos(lista) {
    return lista.length;
}

export function calcularPrecioTotal(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i].precio;
    }
    return total;
}

export function juegosDisponibles(lista) {
    let disponibles = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].disponible) {
            disponibles++;
        }
    }
    return disponibles;
}

export function crearResumen(lista) {
    let resumen = 'Catálogo de Videojuegos:\n';
    for (let i = 0; i < lista.length; i++) {
        resumen += `- ${lista[i].titulo} (${lista[i].genero}) - $${lista[i].precio} - ${lista[i].disponible ? 'Disponible' : 'No Disponible'}\n`;
    }
    return resumen;
}

export function buscarPorGenero(lista, genero) {
    let resultados = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].genero.toLowerCase() === genero.toLowerCase()) {
            resultados.push(lista[i]);
        }
    }
    return resultados;
}