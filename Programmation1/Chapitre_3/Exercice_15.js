const nombresPositifs = [];
const nombresNegatifs = [];

do {
    var nombre = Number(prompt("Entrez le nombre: "));
    
    if (nombre > 0 && nombre != 0) {
        nombresPositifs.push(nombre);
    }
    
    if (nombre < 0 && nombre != 0) {
        nombresNegatifs.push(nombre)
    };

} while (nombre != 0);

document.write(`<span>Nombres positifs: ${nombresPositifs. length}</span></br><span> Nombre négatifs: ${nombresNegatifs. length}</span>`);