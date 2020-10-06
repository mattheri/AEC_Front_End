/*Transférer les valeurs Fahrenheit de 10 à 20 en Celsius par tranche de 1. */

function fahrenheitACelcius (tranche, degreeDepart, degreeFin) {

    function convertir (degree) {
        const celsius = (degree - 32) * 5/9;

        return celsius;
    };

    for (let i = degreeDepart; i <= degreeFin; i = i + tranche) {
        document.write(`<div>${convertir(i)}</div>`)
    };
};

fahrenheitACelcius(1, 10, 20);