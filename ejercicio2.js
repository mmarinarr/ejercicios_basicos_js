//2.1
const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;
console.log(jedi.edad)

//2.2
const leia = {nombre: "Leia", apellido: "Organa", edad: "20",}
console.log(`Soy ${leia.nombre} ${leia.apellido}, tengo ${leia.edad} años y soy una princesa de Alderaan.`);

//2.3
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

let suma =  (sable1.precio + sable2.precio);
console.log(suma)

//2.4
//let precioBaseGlobal = 10000;
let precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000};

let precioFinal1 = (precioBaseGlobal + nave1.precioBase);
let precioFinal2 = (precioBaseGlobal + nave2.precioBase);
console.log(precioFinal1);
console.log(precioFinal2);