"use strict";

// 1. Estadísticas de productos
//
//    Datos de entrada:
//      const productos = [
//        { id:1, nombre:"Portátil", categoria:"informática", precio:900 },
//        { id:2, nombre:"Ratón", categoria:"informática", precio:20 },
//        { id:3, nombre:"Silla", categoria:"oficina", precio:120 },
//        { id:4, nombre:"Mesa", categoria:"oficina", precio:250 },
//        { id:5, nombre:"Monitor", categoria:"informática", precio:200 }
//      ];
//
//    Obtener:
//      1. Obtener todos los productos de informática.
//      2. Obtener solo sus nombres.
//      3. Calcular el precio total de los productos de informática.
//      4. Agrupar todos los productos por categoría usando Map.
//      5. Obtener un Set con todas las categorías disponibles.

console.log(`\n---- Ejercicio 1 ----\n`)

const productos = [
    { id: 1, nombre: "Portátil", categoria: "informática", precio: 900 },
    { id: 2, nombre: "Ratón", categoria: "informática", precio: 20 },
    { id: 3, nombre: "Silla", categoria: "oficina", precio: 120 },
    { id: 4, nombre: "Mesa", categoria: "oficina", precio: 250 },
    { id: 5, nombre: "Monitor", categoria: "informática", precio: 200 }
];

console.log("1. Todos los productos de informática:");
console.log(productos.filter(p => p.categoria === "informática"));

console.log("2. Todos los productos de informática (solo nombres):");
console.log(productos.filter(p => p.categoria === "informática").map(p => p.nombre));

console.log("3. Precio total:");
console.log(productos.reduce((acc, curr) => acc += curr.precio, 0));

console.log("4. Agrupar por categoría:");
console.log(
    productos
        .reduce(
            (acc, curr) => {
                if (!acc.get(curr.categoria))
                    acc.set(curr.categoria, []);

                acc.get(curr.categoria).push(curr);
                return acc;
            },
            new Map())
    );

console.log("5. Obtener un Set con todas las categorías:");
console.log(
    productos
        .reduce(
            (acc, curr) => acc.add(curr.categoria),
            new Set())
    );

// 2. Sistema de etiquetas
//
//    Datos de entrada:
//      const articulos = [
//        { titulo: "Introducción a JS", tags: ["js", "web", "programación"] },
//        { titulo: "CSS Grid", tags: ["css", "web", "diseño"] },
//        { titulo: "Node.js básico", tags: ["js", "node", "backend"] }
//      ];
//
//    Obtener:
//      1. Crea un Set con todas las etiquetas únicas.
//      2. Crea un Map donde cada etiqueta tenga asociados los artículos que la usan.
//      3. Crea una función que reciba una etiqueta y devuelva los artículos correspondientes

console.log(`\n---- Ejercicio 2 ----\n`)

const articulos = [
    { titulo: "Introducción a JS", tags: ["js", "web", "programación"] },
    { titulo: "CSS Grid", tags: ["css", "web", "diseño"] },
    { titulo: "Node.js básico", tags: ["js", "node", "backend"] }
];

console.log("1. Crea un Set con todas las etiquetas únicas.");
console.log(
    articulos
        .reduce(
            (acc, curr) => {
                curr.tags.forEach(val => acc.add(val));
                return acc;
            },
            new Set())
    );

console.log("2. Map donde: Etiqueta => Los artículos que la usan.");
console.log(
    articulos
        .reduce(
            (acc, curr) => {
                for (const tag of curr.tags)
                {
                    if (!acc.get(tag))
                        acc.set(tag, []);

                    acc.get(tag).push(curr);
                }

                return acc;
            },
            new Map())
    );

console.log("3. Función: Etiqueta => Artículos correspondientes.");

function getArticles(tag)
{
    return articulos.filter(art => art.tags.includes(tag));
}

console.log(getArticles('js'));
console.log(getArticles('css'));

// 3. Crea una clase Biblioteca. Cada libro tendrá: titulo, autor, genero, leido.
//      
//      La clase debe permitir:
//        1. Añadir libros.
//        2. Buscar libros por género.
//        3. Obtener solo los libros leídos.
//        4. Obtener un Set con todos los géneros disponibles.
//        5. Recorrer la biblioteca con for...of.
//        6. Tener un generador que devuelva solo los libros no leídos.

class Biblioteca
{
    #data

    constructor()
    {
        this.#data = [];
    }

    add(titulo, autor, genero, leido)
    {
        this.#data.push({
            titulo: titulo,
            autor: autor,
            genero: genero,
            leido: leido,
        });
    }

    getByGenre(genero)
    {
        return this.#data.filter(libro => libro.genero === genero);
    }

    getRead()
    {
        return this.#data.filter(libro => libro.leido === true);
    }

    getAllGenres()
    {
        return this.#data.reduce((acc, curr) => acc.add(curr.genero), new Set());
    }

    *[Symbol.iterator]()
    {
        yield* this.#data;
    }

    *unreadIterator()
    {
        yield* this.#data.filter(libro => libro.leido === false);
    }
}

console.log(`\n---- Ejercicio 3 ----\n`)

const biblioteca = new Biblioteca();

// 1. Agregar libros (10+)
biblioteca.add("El Quijote", "Miguel de Cervantes", "novela", true);
biblioteca.add("1984", "George Orwell", "ciencia ficción", true);
biblioteca.add("Fundación", "Isaac Asimov", "ciencia ficción", false);
biblioteca.add("El Hobbit", "J.R.R. Tolkien", "fantasía", true);
biblioteca.add("Harry Potter", "J.K. Rowling", "fantasía", false);
biblioteca.add("Dune", "Frank Herbert", "ciencia ficción", true);
biblioteca.add("Cien años de soledad", "Gabriel García Márquez", "realismo mágico", true);
biblioteca.add("El Nombre del Viento", "Patrick Rothfuss", "fantasía", false);
biblioteca.add("Neuromante", "William Gibson", "ciencia ficción", false);
biblioteca.add("La Casa de los Espíritus", "Isabel Allende", "realismo mágico", true);
biblioteca.add("Mistborn", "Brandon Sanderson", "fantasía", false);

// 2. Buscar libros por género
console.log("2. Libros de género 'ciencia ficción' y 'fantasia':");
console.log(biblioteca.getByGenre("ciencia ficción"));
console.log(biblioteca.getByGenre("fantasía"));

// 3. Obtener solo los libros leídos
console.log("\n3. Libros ya leídos:");
console.log(biblioteca.getRead());

// 4. Obtener todos los géneros
console.log("\n4. Todos los géneros disponibles:");
console.log(biblioteca.getAllGenres());

// 5. Recorrer con for...of
console.log("\n5. Recorrer biblioteca con for...of:");
for (const libro of biblioteca) {
    console.log(`   ${libro.titulo} - ${libro.autor} (${libro.genero})`);
}

// 6. Generador de libros no leídos
console.log("\n6. Libros no leídos (usando generador):");
for (const libro of biblioteca.unreadIterator()) {
    console.log(`   ${libro.titulo} - ${libro.autor}`);
}

// 4. Pipeline funcional
//      Usa: [ map ] [ reduce ] [ Map ] [ filter ] [ sort ]
//     
//      JAVASCRIPT
//        const ventas = [
//          { producto:"A", unidades:3, precio:10 },
//          { producto:"B", unidades:2, precio:20 },
//          { producto:"C", unidades:5, precio:7 },
//          { producto:"A", unidades:1, precio:10 }
//        ];
//
//      Calcula:
//        1. El total de cada venta (unidades × precio).
//        2. El importe total de todas las ventas.
//        3. Un Map con el total vendido por producto (suma las ventas del mismo producto).
//        4. El producto con mayor facturación.
//        5. Un array ordenado por facturación descendente.

const ventas = [
    { producto: "A", unidades: 3, precio: 10 },
    { producto: "B", unidades: 2, precio: 20 },
    { producto: "C", unidades: 5, precio: 7 },
    { producto: "A", unidades: 1, precio: 10 }
];

console.log(`\n---- Ejercicio 4 ----\n`)

// 1. Total de cada venta.
const totales = ventas.map(v => ({ producto: v.producto, ventaTotal: v.unidades * v.precio }));
console.log(totales);

// 2. Importe total de todas las ventas.
console.log(ventas.reduce((acc, curr) => acc + curr.unidades * curr.precio, 0));

// 3. Map con el total vendido por producto.
const totalPorProducto =
    ventas.reduce(
        (acc, curr) => {
            if (!acc.get(curr.producto))
                acc.set(curr.producto, 0);
            
            const prevValue = acc.get(curr.producto);
            acc.set(curr.producto, prevValue + curr.unidades * curr.precio);

            return acc;
        },
        new Map()
    );
console.log(totalPorProducto);

// 4. Producto de mayor facturación.
const productoMayorFacturacion = [...totalPorProducto.entries()].sort((a, b) => b[1] - a[1])[0];
console.log(productoMayorFacturacion);

// 5. Un array ordenado por facturación descendente.
const ventasDescendientes =
    [...totalPorProducto.entries()]
        .map(e => ({ producto: e[0], ventaTotal: e[1] }))
        .sort((a, b) => b.ventaTotal - a.ventaTotal);
console.log(ventasDescendientes);

// 5. Usuarios con identificadores simbólicos
//      Usa: [ Symbol ] [ Map ] [ Symbol.iterator ] [ Object.keys ]
//      Crea usuarios con: nombre, email, rol. Añade a cada uno un identificador
//      interno único usando Symbol().
//
//    El sistema debe:
//      1. Mostrar solo las propiedades públicas (sin el símbolo).
//      2. Recuperar el identificador simbólico de cada usuario.
//      3. Guardar los usuarios en un Map usando el símbolo como clave.
//      4. Buscar un usuario por su símbolo.
//      5. Hacer que la colección de usuarios sea iterable con for...of.

console.log(`\n---- Ejercicio 5 ----\n`)

const userKey = Symbol("userKey");

let userIdCounter = 0;
function createUser(nombre, email, rol)
{
    return {
        [userKey]: `${String(Date.now())}-${userIdCounter++}`,
        nombre: nombre,
        email: email,
        rol: rol
    };
}

// 1. Mostrar solo las propiedades públicas (sin el símbolo).
const user1 = createUser("Alice", "alice@example.com", "usuario");
const user2 = createUser("Bob", "bob@example.com", "administrador");
const user3 = createUser("Charlie", "charlie@example.com", "usuario");

console.log("1. Propiedades públicas:");
console.log(Object.keys(user1));

// 2. Recuperar el identificador simbólico de cada usuario.
console.log("\n2. Identificador simbólico:");
console.log(user1[userKey]);
console.log(user2[userKey]);
console.log(user3[userKey]);

// 3. Guardar los usuarios en un Map usando el símbolo como clave.
const userMap = new Map();
userMap.set(user1[userKey], user1);
userMap.set(user2[userKey], user2);
userMap.set(user3[userKey], user3);

// 4. Buscar un usuario por su símbolo.
console.log("\n4. Buscar usuario por símbolo:");
const userIdToFind = user1[userKey];
console.log(userMap.get(userIdToFind));

// 5. Hacer que la colección de usuarios sea iterable con for...of.
console.log("\n5. Iterar usuarios con for...of:");
for (const [id, user] of userMap) {
    console.log(`   ID: ${id}, Nombre: ${user.nombre}, Email: ${user.email}, Rol: ${user.rol}`);
}

// 6. Generador de paginación.
//      Usa: [ function* ] [ yield ] [ slice ]
//      Crea una función generadora paginar(array, tamanoPagina) que devuelva
//      páginas (subarrays) de datos.
//    
//      JAVASCRIPT
//        const datos = [1, 2, 3, 4, 5, 6, 7];
//        for (const pagina of paginar(datos, 3)) {
//          console.log(pagina);
//        }

console.log(`\n---- Ejercicio 6 ----\n`)

function* paginar(array, tamanoPagina)
{
    let startIndex = 0;
    while (startIndex < array.length)
    {
        yield array.slice(startIndex, startIndex + tamanoPagina);
        startIndex += tamanoPagina;
    }
}

console.log();

const datos = [1, 2, 3, 4, 5, 6, 7];
for (const pagina of paginar(datos, 3)) {
    console.log(pagina);
}

// 7. Ranking de alumnos
//      Usa: [ map ] [ filter ] [ sort ] [ reduce ] [ Map ] [ function* ]
//      JAVASCRIPT
//        const alumnos = [
//          { nombre: "Ana", notas: [ 8, 9, 7 ] },
//          { nombre: "Luis", notas: [ 5, 6, 6 ] },
//          { nombre: "Marta", notas: [ 10, 9, 10 ] },
//          { nombre: "Pedro", notas: [ 4, 5, 3 ] }
//        ];
//
//      Crea un programa que:
//        1. Calcule la media de cada alumno.
//        2. Filtre solo los aprobados (media ≥ 5).
//        3. Ordene los aprobados por nota media descendente.
//        4. Cree un Map con nombre → media.
//        5. Cree un generador que devuelva los alumnos uno a uno en orden de ranking.

console.log(`\n---- Ejercicio 7 ----\n`)
const alumnos = [
    { nombre: "Ana", notas: [ 8, 9, 7 ] },
    { nombre: "Luis", notas: [ 5, 6, 6 ] },
    { nombre: "Marta", notas: [ 10, 9, 10 ] },
    { nombre: "Pedro", notas: [ 4, 5, 3 ] }
];

function media(alumno)
{
    return alumno.notas.reduce((acc, curr) => acc += curr) / alumno.notas.length;
}

// 1. Media de cada alumno.
const alumnosConMedia = alumnos.map(a => ({ nombre: a.nombre, media: media(a) }));
console.log(alumnosConMedia);

// 2. Solo aprobados.
const aprobados = alumnos.filter(a => media(a) >= 5);
console.log(aprobados);

// 3. Solo aprobados ordenados descendentemente.
console.log(aprobados.sort((a, b) => media(b) - media(a)));

// 4. Map con nombre => media.
var mediaMap =
    alumnos.reduce(
        (acc, curr) => acc.set(curr.nombre, media(curr)),
        new Map()    
    );
console.log(mediaMap);

function* genMejoresAlumnos(als)
{
    const localAls = [...als].sort((a, b) => media(b) - media(a));
    for (const a of localAls)
        yield a;
}

for (const a of genMejoresAlumnos(alumnos))
    console.log(a);