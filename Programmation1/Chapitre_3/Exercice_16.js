/*Faire un programme qui boucle 10 fois. 
À toutes les itérations, votre programme génère un nombre aléatoire entre 0 et 1 
et vous demande aussi de choisir un nombre entre 0 et 1. 
Si le nombre est identique, vous gagnez, perdez sinon. Vous affichez le pointage à la fin des 10 itérations.*/

let goodGuess = 0;

for (let i = 0; i <= 10; i++) {
    const nombreOrdinateur = Math.floor(Math.random() * 2);
    const nombrePersonne = Number(prompt("Entrez 0 ou 1."));

    if (nombrePersonne === nombreOrdinateur) {
        goodGuess++;
    };
};

document.write("<span>"+ goodGuess + "</span>")