/*Dans ce jeu, le croupier retourne d’abord deux cartes sur la table. 
Le joueur doit ensuite parier si la valeur de la prochaine carte (la troisième) 
sera ou non classée entre les deux premières cartes. S’il remporte son pari, il gagne la partie, sinon il perd.

Nous proposerons ici une version quelque peu modifiée du jeu. 
Pour rendre les paris plus intéressants, le joueur devra parier tant qu’il gagne (tant que ses prédictions sont correctes). 

Votre algorithme doit donc générer et afficher deux nombres aléatoires de 1 à 13. 
Il doit ensuite demander à l’utilisateur de faire ses paris. Lorsque l’utilisateur perd, 
le nombre de prédictions remportées est affiché.  
*/

let perd = false;
let partiesGagnees = 0;

while (!perd) {
    const nombre1 = Math.floor(Math.random() * 13);
    const nombre2 = Math.floor(Math.random() * 13);
    
    const nombreJoueur = Number(prompt("Entrez le nombre choisi: "));

    if (!(nombreJoueur > nombre1) && !(nombreJoueur < nombre2)) {
        perd = true;
    } else {
        partiesGagnees++;
    }
};

alert(`Parties gagnées: ${partiesGagnees}`);

