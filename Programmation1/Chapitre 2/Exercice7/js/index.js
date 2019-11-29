const nombre = Number(prompt("Entrez le nombre: "));

if (nombre < 0) {
    alert("Négatif");
} else if (nombre > 0) {
    alert("Positif");
} else {
    alert("0");
};