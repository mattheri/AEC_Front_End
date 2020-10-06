/*afficher 1 2 3 4 5 6 7 8 9 10 sur 10 lignes*/

let nombreDeLignes = 0;
const nombreMaxDeLignes = 10;

while (nombreDeLignes !== nombreMaxDeLignes) {

    for (var i = 0; i < 10; i++) {

        document.write(`<span>${i+1} </span>`);

        if (i+1 === 10) {
            document.write(`<br>`);
        }
    
    }

    nombreDeLignes++;
};