const nombre1 = Number(prompt("Entrez le premier nombre: "));
const nombre2 = Number(prompt("Entrez le deuxième nombre: "));

if (nombre1 > nombre2) {
    document.write(`${nombre1}`);
} else if (nombre2 > nombre1) {
    document.write(`${nombre2}`);
} else if (nombre1 === nombre2) {
    document.write(`${nombre1} ${nombre2}`);
};
