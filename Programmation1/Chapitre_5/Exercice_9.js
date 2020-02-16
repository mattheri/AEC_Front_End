/*Lire 10 nombres quelconques et les placer dans un tableau. Par la suite, trouver le plus petit et le plus grand de ces nombres.*/

const nombres = [];

while (nombres.length < 10) {
    nombres.push(Number(prompt("Entrez un nombre: ")));
};

nombres.sort((a, b) => a - b);

document.write(`<span>Le plus petit nombre est ${nombres[0]}</span><br>`);
document.write(`<span>Le plus grand nombre est ${nombres[nombres.length - 1]}</span><br>`);