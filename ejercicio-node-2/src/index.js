import { saludar, despedirse, bienvenidaCurso, crearMensajePersonalizado } from './mensajes.js';

console.log('--- Mensajes básicos ---');

const nombres = ['Juan', 'María', 'Pedro'];
function mostrarMensajes(nombre) {
    console.log(saludar(nombre));
    console.log(despedirse(nombre));
    console.log(bienvenidaCurso(nombre, 'Node.js'));
}

for (const nombre of nombres) {
    mostrarMensajes(nombre);
    console.log('---');
}

console.log('--- Mensajes personalizados ---');

const nombres2 = [ 'Luis' , 'Jesús' ];
const acciones = [ 'estudiar' , 'trabajar' ];
const lugares = [ 'la biblioteca' , 'la oficina' ];

for (let n of nombres2) {
    for (let a of acciones) {
        for (let l of lugares) {
            console.log(crearMensajePersonalizado(n, a, l));
        }
    }
}

console.log('--- ¿Y si llamamos a la función sin argumentos? ---');
console.log(saludar());