/*Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5. (Celsius = 5/9(fahrenheit-32))*/

function fahrenheitACelcius (tranche, degreeDepart, degreeFin) {

    function convertir (degree) {
        const celsius = (degree - 32) * 5/9;

        return celsius;
    };

    for (let i = degreeDepart; i <= degreeFin; i = i + tranche) {
        console.log(convertir(i));
    };
};

fahrenheitACelcius(5, -40, 40);