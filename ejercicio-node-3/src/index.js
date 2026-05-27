import { calcularMedia, notaMasAlta, notaMasBaja, estaAprobado } from './notas.js';

const notas = [7, 8, 5, 6, 10];

console.log('Notas:', notas.join(', '));
console.log('Media:', calcularMedia(notas));
console.log('Nota más alta:', notaMasAlta(notas));
console.log('Nota más baja:', notaMasBaja(notas));
console.log('¿Aprobado?', estaAprobado(notas) ? 'Sí' : 'No');