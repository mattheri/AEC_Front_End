/*afficher 2 4 6 8 10 sur 30 lignes*/

let nombreDeLignes = 0;
const nombreMaxDeLignes = 30;

while (nombreDeLignes !== nombreMaxDeLignes) {

    for (var i = 0; i <= 10; i+=2) {

        if (i !== 0) {
            document.write(`<span>${i} </span>`);
        };

        if (i === 10) {
            document.write(`<br>`);
        };
    
    }

    nombreDeLignes++;
};