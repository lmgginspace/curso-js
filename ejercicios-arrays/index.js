// 1. Solo los números mayores a 10

const numeros = [4, 7, 12, 3, 9, 20, 15, 2];
console.log(numeros.filter(num => num > 10));

// 2. Crea un nuevo array con los precios aplicando un 21 % de IVA. Redondea
//    los resultados a dos decimales con toFixed(2) y luego conviértelos de
//    nuevo a número con parseFloat

const precios = [10, 25, 7.5, 100, 42]
const preciosAjustados = precios.map(precio => parseFloat((precio * 1.21).toFixed(2)));
console.log(preciosAjustados);

// 3. Calcula el importe total.
const importes = [120, 35, 80, 15];
console.log(importes.reduce((accum, curr) => accum += curr, 0))

// 4. Obtén un array solo con los nombres de los usuarios activos.
//    Primero filtra los activos, luego extrae el nombre.

const usuarios = [
    { id: 1, nombre: "Ana", activo: true },
    { id: 2, nombre: "Luis", activo: false },
    { id: 3, nombre: "Marta", activo: true },
    { id: 4, nombre: "Pedro", activo: false }
];

const usuariosFiltrados = usuarios.filter(u => u.activo).map(u => u.nombre);
console.log(usuariosFiltrados);

// 5. Busca el primer producto que no tenga stock.

const productos = [
    { id: 1, nombre: "Ratón", stock: 10 },
    { id: 2, nombre: "Teclado", stock: 0 },
    { id: 3, nombre: "Monitor", stock: 5 }
];

console.log(productos.find(p => p.stock == 0));

// 6. Comprueba:
//    6.1. Si todos los alumnos han aprobado (nota ≥ 5).
//    6.2. Si algún alumno ha sacado sobresaliente (nota ≥ 9).

const notas = [6, 7, 8, 4, 9];
console.log(`¿Han aprobado todos?: ${notas.every(n => n >= 5)}`);
console.log(`Algún sobresaliente?: ${notas.some(n => n >= 9)}`);

// 7. Crea un objeto que agrupe las tareas por categoría usando reduce.
//    Si la clave no existe aún en el acumulador, créala con un array vacío.

const tareas = [
    { titulo: "Estudiar JS", categoria: "estudio" },
    { titulo: "Comprar pan", categoria: "casa" },
    { titulo: "Hacer ejercicios", categoria: "estudio" },
    { titulo: "Limpiar cocina", categoria: "casa" }
];

const agrupacion = tareas
    .reduce(
        (accum, curr) => {
            if (!accum[curr.categoria])
                accum[curr.categoria] = [];

            accum[curr.categoria].push(curr);
            return accum;
        },
        {}
    );

console.log(agrupacion);