class JoueurHockey {

    constructor(
        nom,
        nbButs,
        nbPasses
    ) {
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }

    Total() {
        return this.nbButs + this.nbPasses;
    }

}

const sidney = new JoueurHockey("Sydney Crosby", 454, 787);
const mario = new JoueurHockey("Mario Lemieux", 690, 1033);
const jaromir = new JoueurHockey("Jaromir Jagr", 766, 1155);

class Equipe {

    constructor(joueurs) {
        this.joueurs = joueurs;
    }

    Alignement() {
       for (let j in this.joueurs) {
           console.log(`Voici les joueurs ${this.joueurs[j].nom}`);
       }
    }

    AfficherPointsTotaux() {
        for (let j in this.joueurs) {
            console.log(`Nombre de but par joueur: ${this.joueurs[j].nom} : ${this.joueurs[j].Total()}`);
        }

        let totalDePoints = 0;

        for (let j in this.joueurs) {
            totalDePoints += this.joueurs[j].Total();
        }

        console.log(totalDePoints);
    }
};

const equipe1 = new Equipe([sidney, mario, jaromir]);

equipe1.Alignement();
equipe1.AfficherPointsTotaux();