const vraiOuFaux = [];
const valeurMax = 1000;
const vrais =[];
const faux = [];
let startingTruePosition = 0;
let startingFalsePosition = 0;
let previousTrueLength = vrais.length;
let previousFalseLength = faux.length;

for (let i = 1; i < valeurMax; i++) {
    let valeur = Math.floor(Math.random() * 2);

    if (valeur) {
        vraiOuFaux.push("true");
    } else {
        vraiOuFaux.push("false");
    };
};

for (let j = 0; j < vraiOuFaux.length; j++) {
    if (vraiOuFaux[j - 1] === vraiOuFaux[j] ) {

        if (vraiOuFaux[j] === "true") {
            faux.length = 0;
            vrais.push(vraiOuFaux[j]);
        } else {
            vrais.length = 0;
            faux.push(vraiOuFaux[j]);
        }

        if (vrais.length > previousTrueLength) {
            previousTrueLength = vrais.length;
            startingTruePosition = j - vrais.length;
        };

        if (faux.length > previousFalseLength) {
            previousFalseLength = faux.length;
            startingFalsePosition = j - faux.length
        };
    }
};

document.write(`<span>Plus grand nombre de vrais succéssifs: ${previousTrueLength}</span><br>`);
document.write(`<span>Plus grand nombre de faux succéssifs: ${previousFalseLength}</span><br>`);
document.write(`<span>Index de départ du plus grand nombre de vrais succéssifs: ${startingTruePosition}</span><br>`);
document.write(`<span>Index de départ du plus grand nombre de faux succéssifs: ${startingFalsePosition}</span><br>`);
