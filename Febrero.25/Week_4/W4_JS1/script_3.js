/*Pedir el radio al usuario para calcular el área de un círculo. Buscad la fórmula para calcular la superficie del círculo y el valor de PI (con 4 decimales). 

Mostrar el resultado del cálculo del área para ese radio, mediante la frase: “el área de un círculo con radio X es: XXX” . Debe haber tres variables: radio, pi y área.

Test: para un radio de 22, el área es aprox. 1520.*/

let radio = parseFloat(prompt("Introduce el radio del círculo:"));

let pi = 3.1415;

let area = pi * Math.pow(radio, 2);

console.log(`El área de un círculo con radio ${radio} es: ${area}`);
alert(`El área de un círculo con radio ${radio} es: ${area}`);
