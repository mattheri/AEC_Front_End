const nombre1 = Number(prompt("Entrez le nombre 1: "));
const nombre2 = Number(prompt("Entrez le nombre 2: "));

if (nombre2 != 0) {
    const nombreDivise = nombre1 / nombre2;
    alert(`${nombreDivise}`);
} else {
    alert("Division par zéro interdite.");
};