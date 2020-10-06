let valeurs = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];

const valeurRandom = Math.floor(Math.random() * 10);
const length = valeurs.length;

console.log("valeur random",valeurRandom);

for (let i = 0; i < valeurs.length; i++) {

    if (valeurRandom <= i && valeurRandom === i) {
        valeurs[valeurRandom] = valeurRandom;
    };

    valeurs[i + 1] = i++

    console.log(valeurs);
}