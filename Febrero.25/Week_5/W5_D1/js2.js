/*  Solucionar mediante condicionales el siguiente algoritmo:


Oh! Estás aparcado en la calle, pero el coche no arranca...

Si vives cerca AND tienes ganas de caminar, te vas andando y ya lo arreglarás mañana. Si no, realiza las siguientes comprobaciones:
           - Tiene gasolina?
                        * No => hay que poner gasolina
                                  - Tienes dinero?
                                 • Si => poner gasolina
                                 • No => vas en metro
                          * Sí que tiene gasolina:


                                  - Tiene batería?
                                               * No => recargar batería
                                               * Sí => pásate por el mecánico
 */


let vivesCerca = true; //según la situación
let ganasDeCaminar = false; // según la situación
let tieneGasolina = false; // según la situación
let tienesDinero = false; // según la situación
let tieneBateria = true; // según la situación

if (vivesCerca && ganasDeCaminar) {
    console.log("Te vas andando y ya lo arreglarás mañana.");
} else {
    if (!tieneGasolina) {
        console.log("El coche no tiene gasolina.");
        if (tienesDinero) {
            console.log("Poner gasolina.");
        } else {
            console.log("Vas en metro.");
        }
    } else {
        if (!tieneBateria) {
            console.log("Recargar batería.");
        } else {
            console.log("Pásate por el mecánico.");
        }
    }
}