// 1. Crea un objeto usuario con estas propiedades públicas: nombre y email.
//    Añade además una propiedad usando Symbol('password').
//    Comprueba:
//    1. Que la propiedad simbólica no aparece con Object.keys.
//    2. Que sí puede obtenerse usando Object.getOwnPropertySymbols.
//
//    RESULTADO ESPERADO
//      Object.keys(usuario) → ["nombre", "email"]
//      Object.getOwnPropertySymbols(usuario) → [ Symbol(password) ]
//      usuario[passwordKey] → 'miPassword123

const passwordSymbol = Symbol('password');

const usuario = {
    nombre: "Luis",
    email: "luis@js.com",
    [passwordSymbol]: "secreto",
};

console.log(Object.keys(usuario));
console.log(Object.getOwnPropertySymbols(usuario));
console.log(usuario[passwordSymbol]);

// 2. Añade ambos símbolos como propiedades de un mismo objeto.
//    Comprueba que id1 === id2 es false y que cada propiedad guarda un
//    valor distinto sin pisarse entre sí.

const id1 = Symbol("id");
const id2 = Symbol("id");

const obj = {
    [id1]: "abc",
    [id2]: 47
}

console.log(`Symbol 1 === Symbol 2: ${id1 === id2}`);
console.log(`"id1" de obj: ${obj[id1]}`);
console.log(`"id2" de obj: ${obj[id2]}`);

// 3. Crea un objeto rango que represente los números del 1 al 5.
//    Implementa [Symbol.iterator] para que pueda recorrerse con for...of.
//    Uso esperado:
//      for (const numero of rango) {
//        console.log(numero);
//      }

/*const rango = {
    [Symbol.iterator]: function*() {
        for (let i = 1; i <= 5; i++)
            yield { value: i, done: false };

        yield { value: undefined, done: true };
    }
};*/

const rango = {
    [Symbol.iterator]: function* () {
        for (let i = 1; i <= 5; i++)
            yield i;
    }
};

for (const numero of rango) {
    console.log(numero);
}