/*Lire 2 valeurs dans un tableau. Inverser ces deux valeurs.*/

let valeurs = [
    12,
    15
];

for (let i = 0; i < valeurs.length; i++) {
    if (i < valeurs.length - 1) {
        let temp = valeurs[(valeurs.length - 1) - i];
        valeurs[(valeurs.length - 1) - i] = valeurs[i];
        valeurs[i] = temp;
    };
};

console.log(valeurs);