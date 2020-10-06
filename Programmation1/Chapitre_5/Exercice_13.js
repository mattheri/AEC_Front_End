/*Lire 12 nombres quelconques et les mettre dans un tableau. 
Vérifier si le dernier nombre (12e) additionné avec un des 11 autres nombres font une somme de 15. Si tel est le cas, afficher ces 2 nombres.*/

const nombres = [];
const length = 12;

while (nombres.length < length) {
    nombres.push(Number(prompt("Entrez un nombre")));
};

for (let i = 0; i < length; i++) {
    if (nombres[i - 1]) {
        nombres.forEach((nombre, index) => {
            if (nombre + nombres[nombres.length - 1] === 15) {
                document.write(`<span>Le nombre à la position ${i}: ${nombres[nombres.length]} plus le nombre à la position ${index}: ${nombre} équivaut à 15.</span>`);
            };
        });
    };
};