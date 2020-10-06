const arrayDeNombres = [];

do {
    const nombre = Number(prompt("Entrez le nombre: "));
    arrayDeNombres.push(nombre);
} while (nombre != 0);

const reducteur = (accumulateur, valeur) => accumulateur + valeur;

const total = arrayDeNombres.reduce(reducteur);