/* affiche 10 8 6 4 2 0 sur 12 lignes*/

let nombreDeLignes = 0;
const nombreMaxDeLignes = 12;

while (nombreDeLignes !== nombreMaxDeLignes) {

    for (var i = 10; i >= 0; i-=2) {

        document.write(`<span>${i} </span>`);

        if (i === 0) {
            document.write(`<br>`);
        };
    
    }

    nombreDeLignes++;
};