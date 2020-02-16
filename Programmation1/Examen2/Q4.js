class Activite {
    constructor(nom, cout) {
        this.nom = nom;
        this.cout = cout;
    };
};

class Voyage {
    constructor(destination, coutBillet, tabActivite) {
        this.destination = destination;
        this.coutBillet = coutBillet;
        this.tabActivite = tabActivite;
        this.coutTotal = this.GetCout();//?
    };

    GetCout() {
        let coutTotal = 0;
        for (let i = 0; i < this.tabActivite.length; i++) {
            coutTotal += this.tabActivite[i].cout
        };
        return coutTotal += this.coutBillet;
    };
};

class Personne {
    constructor(nom, voyage) {
        this.nom = nom;
        this.voyage = voyage;
    };
};

const goldenKnightsHockey = new Activite("Golden Knights hockey", 125);
const raidersFootball = new Activite("Raiders football", 200);
const tournoiPoker = new Activite("Tournoi de poker", 500);

const voyage = new Voyage("Las Vegas", 400, [goldenKnightsHockey, raidersFootball, tournoiPoker]);

const shany = new Personne("Shany Carle", voyage);



document.write(`<span>${shany.nom} va à ${shany.voyage.destination}.</span><br><br><span>Il fera les activités suivantes:</span><br>`);
shany.voyage.tabActivite.forEach(activite => {
    document.write(`<span>${activite.nom} pour un coût de ${activite.cout}$.</span><br>`);
});
document.write(`<br><span>Le billet d'avion lui coûte ${shany.voyage.coutBillet}$ et le voyage en tout sera de ${shany.voyage.coutTotal}$.</span>`)