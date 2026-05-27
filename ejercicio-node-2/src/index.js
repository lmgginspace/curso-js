import { sumar, restar, multiplicar, dividir } from './calculadora.js';

const numeroA = 20;
const numeroB = 5;

console.log('Calculadora modular');
console.log('-------------------');
console.log(`Suma: ${sumar(numeroA, numeroB)}`);
console.log(`Resta: ${restar(numeroA, numeroB)}`);
console.log(`Multiplicación: ${multiplicar(numeroA, numeroB)}`);
console.log(`División: ${dividir(numeroA, numeroB)}`);
console.log(`División / 0: ${dividir(numeroA, 0)}`)