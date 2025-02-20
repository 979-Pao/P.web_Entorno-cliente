/*Pide al usuario que introduzca nombre, localidad donde vive y hobby. Que se muestre en una sola frase: "Te llamas XXX, vives en YYY, y te gusta ZZZ".*/

let nombre = prompt("Introduce tu nombre:");
let localidad = prompt("¿En qué ciudad vives?");
let hobby = prompt("¿Cuál es tu hobby?");

let mensaje = `Te llamas ${nombre}, vives en ${localidad}, y te gusta ${hobby}`;
console.log(mensaje);
alert(mensaje);