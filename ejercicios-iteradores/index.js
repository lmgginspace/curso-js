// 1. Crea una función crearIterador(array) que devuelva un objeto con un
//    método next() que recorra el array elemento a elemento.
//
//    Uso esperado:
//      const it = crearIterador(["a", "b", "c"]);
//      console.log(it.next());
//      console.log(it.next());
//      console.log(it.next());
//      console.log(it.next());
//
//    Resultado esperado:
//      { value: 'a', done: false }
//      { value: 'b', done: false }
//      { value: 'c', done: false }
//      { value: undefined, done: true }

// Solucion 1: Con objeto.
/*function crearIterador(array) {
    return new function() {
        this.arr = [...array],
        this.curr = -1,
        this.next = function() {
            this.curr++;
            if (this.curr >= this.arr.length)
                return { value: undefined, done: true };
            
            return { value: this.arr[this.curr], done: false };
        }
    }
}*/

// Solucion 2: Con closure.
function crearIterador(array) {
    const arr = [...array];
    let index = -1;

    return {
        next: function() {
            index++;
            if (index >= arr.length)
                return { value: undefined, done: true };
            
            return { value: arr[index], done: false };
        }
    }
}

const it = crearIterador(["a", "b", "c"]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// 2. Crea una función generadora contador() que produzca los
//    números 1, 2 y 3.
//
//    Uso epserado:
//      const gen = contador();
//      console.log(gen.next());
//      console.log(gen.next());
//      console.log(gen.next());
//      console.log(gen.next());
//
//    Resultado esperado:
//      { value: 1, done: false }
//      { value: 2, done: false }
//      { value: 3, done: false }
//      { value: undefined, done: true }

console.log(`\n---- Ejercicio 2 ----\n`)

function* contador() {
    for (let i = 1; i <= 3; i++)
        yield i;
}

const gen = contador();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// 3. Crea una función generadora que produzca todos los
//    números de un rango:

console.log(`\n---- Ejercicio 3 ----\n`)

function* rango(inicio, fin) {
    for (let i = inicio; i <= fin; i++)
        yield i;
}

for (const n of rango(3, 7)) {
    console.log(n);
}

// 4. Crea una función generadora ids() que produzca
//    identificadores indefinidamente. Después obtén solo los
//    cinco primeros valores.
//
//    Resultado esperado:
//      { value: 1, done: false }
//      { value: 2, done: false }
//      { value: 3, done: false }
//      { value: undefined, done: true }

console.log(`\n---- Ejercicio 4 ----\n`)

function* ids() {
    let currId = 1;
    while (true) {
        yield `ID-${currId}`;
        currId++;
    }
}

let generator = ids();
for (let i = 0; i < 5; i++) {
    let val = generator.next();
    console.log(val.value);
}

// 5. Crea una clase ListaTareas que almacene tareas internamente
//    e implemente [Symbol.iterator] para que pueda recorrerse con
//    for...of.
// 
//    JAVASCRIPT
//      const lista = new ListaTareas();
//      lista.add("Estudiar");
//      lista.add("Practicar JS");
//      lista.add("Subir cambios a GitHub");
//      for (const tarea of lista) {
//        console.log(tarea);
//      }
//
//     RESULTADO ESPERADO
//       Estudiar
//       Practicar JS
//       Subir cambios a GitHub

console.log(`\n---- Ejercicio 5 ----\n`)

class ListaTareas {
    constructor() {
        this.tareas = [];
        this.count = 0;
    }

    add(nombre) {
        this.tareas.push({ nombre: nombre, terminada: false });
    }

    terminar(nombre) {
        let tarea = this.tareas.find(t => t.nombre === nombre);
        if (tarea) {
            tarea.terminada = true;
        }
    }
    
    // Versión extendida:
    /* ---- ----
    [Symbol.iterator]() {
        let index = -1;
        const nombres = this.tareas.map(t => t.nombre);

        return {
            next: function() {
                index++;
                if (index >= nombres.length)
                    return { value: undefined, done: true };
            
                return { value: nombres[index], done: false };
            }
        }
    }
    ---- ---- */
    
    *[Symbol.iterator]() {
        yield* this.tareas.map(t => t.nombre);
    }
}

const lista = new ListaTareas();
lista.add("Estudiar");
lista.add("Practicar JS");
lista.add("Subir cambios a GitHub");

for (const tarea of lista) {
    console.log(tarea);
}