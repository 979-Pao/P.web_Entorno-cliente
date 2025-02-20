/* BECA ESTUDIANTE
Para conseguir una beca en Hack-Iron el estudiante debe cumplir las siguientes condiciones:
1- Que sea mayor o igual a 18 años y resida en Barcelona
2- O bien, que sea mayor de 30 años y tenga familia numerosa
3- O bien, Que tenga entre 12 y 18 años y sea un geni@ de la programación
Recuerda que puedes usar los métodos toLowerCase() o toUpperCase() para facilitar la comparación de strings.  */

/*function esElegibleParaBeca() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    let residencia = prompt("Ingrese su lugar de residencia:").toLowerCase();
    let tieneFamiliaNumerosa = prompt("¿Tiene familia numerosa? (si/no)").toLowerCase() === "si";
    let esGenioProgramacion = prompt("¿Eres un genio de la programación? (si/no)").toLowerCase() === "si";

    if ((edad >= 18 && residencia === "barcelona") ||
        (edad > 30 && tieneFamiliaNumerosa) ||
        (edad >= 12 && edad <= 18 && esGenioProgramacion)) {
        alert("¡Felicidades! Cumples con los requisitos para la beca en Hack-Iron.");
    } else {
        alert("Lo sentimos, no cumples con los requisitos para la beca en Hack-Iron.");
    }
}

// Llamar a la función para iniciar el proceso
esElegibleParaBeca();*/

function esElegibleParaBeca(edad, residencia, tieneFamiliaNumerosa, esGenioProgramacion) {
    residencia = residencia.toLowerCase(); // Convertimos a minúsculas para evitar errores de comparación

    if ((edad >= 18 && residencia === "barcelona") ||
        (edad > 30 && tieneFamiliaNumerosa) ||
        (edad >= 12 && edad <= 18 && esGenioProgramacion)) {
        return "¡Felicidades! Cumples con los requisitos para la beca en Hack-Iron.";
    } else {
        return "Lo sentimos, no cumples con los requisitos para la beca en Hack-Iron.";
    }
}

// Ejemplo de uso
console.log(esElegibleParaBeca(18, "Barcelona", false, false)); // Debería ser elegible
console.log(esElegibleParaBeca(35, "Madrid", true, false)); // Debería ser elegible
console.log(esElegibleParaBeca(15, "Barcelona", true, false)); // No elegible
console.log(esElegibleParaBeca(17, "Barcelona", false, false)); // No elegible