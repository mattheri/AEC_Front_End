/* afficher 1 3 5 7 9 11 sur 13 lignes */

let nombreDeLignes = 0;
const nombreMaxDeLignes = 13;

while (nombreDeLignes !== nombreMaxDeLignes) {

    for (var i = 0; i <= 10; i+=2) {

        document.write(`<span>${i+1} </span>`);

        if (i+1 === 11) {
            document.write(`<br>`);
        };
    
    }

    nombreDeLignes++;
};