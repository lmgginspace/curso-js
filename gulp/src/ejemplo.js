// Ejemplo de archivo JS con sintaxis moderna ES6+

// Arrow functions
const suma = (a, b) => a + b;

// Template literals
const nombre = "Babel";
const mensaje = `Hola desde ${nombre}!`;

// Destructuring
const persona = { nombre: "Juan", edad: 30 };
const { nombre: personaNombre, edad } = persona;

// Classes
class Calculadora {
  constructor() {
    this.resultado = 0;
  }

  sumar(a, b) {
    this.resultado = a + b;
    return this.resultado;
  }

  multiplicar(a, b) {
    this.resultado = a * b;
    return this.resultado;
  }
}

// Export
export { suma, mensaje, Calculadora };
export default Calculadora;
