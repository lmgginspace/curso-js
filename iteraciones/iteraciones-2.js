"use strict";

const myarray = [ 45, 67, 123, 56, 79, 23 ];
const myobject = {
    clave_a: 67,
    c: {
        d: 56,
        e: 67,
    },
    "mi clave": 'aaa',
}; 

console.log('\nFOR EACH\n------------');

function pintaValores(valor, index) {
    console.log(`El valor en ${index} es: ${valor}`);
}

myarray.forEach( pintaValores );


console.log('\nFOR OF (array)\n------------');

for (let val of myarray) {
    console.log(val);
}

console.log('------------');



console.log('\nFOR IN (array)\n------------');

for (let val in myarray) {
    console.log(val);
}

console.log('------------');


console.log('\nFOR IN (object)\n------------');

for (let val in myobject) {
    console.log(`${val} == ${myobject[val]}`);
}

console.log('------------');