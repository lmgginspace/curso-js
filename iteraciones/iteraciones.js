"use strict";

let myarray = [45,67,123,56,79,23];

function pintaValores (valor,index) {
    console.log(`El valor en ${index} es: ${valor}`);
}

myarray.forEach( pintaValores );

/*
let key, index, val;

console.log('\nFOR OF');
console.log('............');

for (val of myarray) {
    console.log(val);
}

console.log('............');

console.log('\nFOR IN');
console.log('............');

for (val in myarray) {
    console.log(val);
}

console.log('............');

let myobject = {
    clave_a: 67,
    c: {
        d: 56,
        e: 67,
    },
    "mi clave": 'aaa',
}; 

console.log('\nFOR IN');
console.log('............');

for (val in myobject) {
    console.log(`${val} == ${myobject[val]}`);
}

console.log('............');

*/