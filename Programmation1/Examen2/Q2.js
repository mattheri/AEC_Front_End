let nb = 1000;
let nbColonnes = 19;
let nbLignes = 10;

for (let i = 0; i < nbLignes; i++) {
    for (let j = 0; j <= nbColonnes; j++) {
        document.write(`<span>${nb} </span>`);

        nb = nb - 5;

        if (j === nbColonnes) {
            document.write(`<br>`);
        };
    }
};