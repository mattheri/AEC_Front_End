const nombresPositifs = [];
const nombresNegatifs = [];

do {
    const nombre = Number(prompt("Entrez le nombre: "));
    
    if (nombre > 0) {
        nombresPositifs.push(nombre);
    } else {
        nombresNegatifs.push(nombre)
    };

} while (nombre != 0);

console.log(`Nombres positifs: ${nombresPositifs. length}`);
console.log(`Nombres négatifs: ${nombresNegatifs. length}`);