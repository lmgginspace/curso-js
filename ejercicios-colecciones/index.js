// 1. Crea un nuevo array sin nombres repetidos.
const nombres = [ "Ana", "Luis", "Ana", "Marta", "Luis", "Pedro" ];
const nombresUnicos = [ ...new Set(nombres) ];

console.log(nombresUnicos);

// 2. Obtén un array con los nombres que aparecen en ambos grupos.

const grupoA = new Set(["Ana", "Luis", "Marta"]);
const grupoB = new Set(["Marta", "Pedro", "Ana"]);

console.log([...grupoA.intersection(grupoB)]);

// 3. Obtén los nombres de las personas inscritas que no asistieron.

const inscritos = new Set(["Ana", "Luis", "Marta", "Pedro"]);
const asistentes = new Set(["Ana", "Marta"]);

console.log([...inscritos.difference(asistentes)]);

// 4. Crea un Map donde la clave sea cada palabra y el valor, cuántas veces aparece.

const texto = "js es divertido js es potente js";

const palabras = texto
    .split(" ")
    .reduce(
        (accum, curr) => {
            if (!accum.has(curr))
                accum.set(curr, 0);
            
            const count = accum.get(curr);
            accum.set(curr, count + 1);
            return accum;
        },
        new Map()
    );

console.log(palabras);

// 5. Crea un Map donde la clave sea el id y el valor sea el objeto completo
//    del alumno. Después, obtén el alumno con id 2 usando map.get().

const alumnos = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Marta" }
];

// Mi método.
const mapaAlumnos = alumnos
    .reduce(
        (map, curr) => map.set(curr.id, curr),
        new Map()
    );

console.log(mapaAlumnos);
console.log(mapaAlumnos.get(2));

// Método alternativo.
const mapaAlumnos2 = new Map(alumnos.map(a => [a.id, a]));
console.log(mapaAlumnos2);

// 6. Crea un Map para representar un inventario que permita:
//    6.1. Añadir productos con su cantidad.
//    6.2. Consultar la cantidad de un producto.
//    6.3. Incrementar la cantidad de un producto existente.
//    6.4. Eliminar un producto.
//    6.5. Mostrar todos los productos con for...of.

const inventario = new Map();

inventario.set("Teclado", 10);
inventario.set("Ratón", 5);
inventario.set("Monitor", 3);

// Incrementar:
inventario.set("Teclado", inventario.get("Teclado") + 5);

// Eliminar:
inventario.delete("Ratón");

// Mostrar todo:
for (const [producto, cantidad] of inventario) {
    console.log(`${producto}: ${cantidad} unidades`);
}

