const nombres = [];
const length = 12;

while (nombres.length < length) {
    nombres.push(Number(prompt("Entrez un nombre")));
};

for (let i = 0; i < length; i++) {
    if (nombres[i - 1]) {
        nombres.forEach((nombre, index) => {
            if (nombre + nombres[i] === 15) {
                document.write(`<span>Le nombre à la position ${i}: ${nombres[i]} plus le nombre à la position ${index}: ${nombre} équivaut à 15.</span>`)
            };
        });
    };
};