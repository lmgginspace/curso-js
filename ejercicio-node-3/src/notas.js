export function calcularMedia(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

export function notaMasAlta(notas) {
    let max = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > max) {
            max = notas[i];
        }
    }
    return max;
}

export function notaMasBaja(notas) {
    let min = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] < min) {
            min = notas[i];
        }
    }
    return min;
}

export function estaAprobado(notas) {
    const media = calcularMedia(notas);
    return media >= 5;
}