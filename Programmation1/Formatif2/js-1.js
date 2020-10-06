//J'ai inclus la solution simple ici pour faciliter ta correction:

/*
const typePokemonAdverse = "eau";
let degatDarkestLariat = 100;

if (typePokemonAdverse === "eau") {
    degatDarkestLariat = degatDarkestLariat * 2;
};

let chance = Math.floor(Math.random() * 2);

if (chance) {
    degatDarkestLariat = degatDarkestLariat * 2;
}

console.log(degatDarkestLariat);
*/

const dommages = ({ pointsAttaque, type }, typeCible) => {

    const effectif = {
        normal: [],
        combat: ["normal", "roche", "acier", "glace", "noirceur"],
        volant: ["combat", "insecte", "herbe"],
        poison: ["herbe", "fee"],
        terre: ["poison", "roche", "acier", "feu", "électrique"],
        roche: ["volant", "insecte", "feu", "électrique"],
        insecte: ["herbe", "psychique", "noirceur"],
        phantome: ["phantome", "psychique"],
        acier: ["roche", "glace", "fee"],
        feu: ["insecte", "acier", "herbe", "glace"],
        eau: ["terre", "roche", "feu"],
        herbe: ["terre", "roche", "eau"],
        electrique: ["volant", "eau"],
        psychique: ["combat", "poison"],
        glace: ["volant", "terre", "herbe", "dragon"],
        dragon: ["dragon"],
        noirceur: ["phantome", "psychique"],
        fee: ["comabt", "dragon", "noirceur"]
    };

    for (let i in effectif) {
        if (type === i) {
            effectif[i].forEach(t => {
                if (typeCible === t) {
                    pointsAttaque = pointsAttaque * 2;
                }
            })
        } 
    }

    return pointsAttaque;
}

class Attaque {
    constructor(nom, type, pointsAttaque, precision) {
        this.nom = nom;
        this.type = type;
        this.pointsAttaque = pointsAttaque;
        this.precision = precision;
        this.chance = this.GetPrecision();
    };

    GetPrecision() {
        let chance = Math.floor(Math.random() * 100);

        if (chance > this.precision) {
            console.log("L'ennemi a esquivé l'attaque!");
            this.pointsAttaque = 0;
        }
    }

    DoAttaque(callback, nbAttaque) {
        if (nbAttaque > 1) {
            let dommages = 0;
            for (let i = 0; i < nbAttaque; i++) {
                dommages += callback
            }
            return dommages;
            
        } else {
            nbAttaque = 1;
            return callback;
        }
    }
};

class AttaqueMultiple extends Attaque {
    constructor(nom, type, pointsAttaque, maxNbAttaques, precision) {
        super(nom, type, pointsAttaque, precision);
        this.maxNbAttaques = maxNbAttaques;
    }

    GetNbAttaque() {
        let nombresAttaque = 0;
        for (let i = 0; i < this.maxNbAttaques; i++) {
            let chance = Math.floor(Math.random() * 2);
            if (chance) {
                nombresAttaque++
            };
        };
        return nombresAttaque;
    }
}

const darkestLariat = new AttaqueMultiple("Darkest Lariat", "feu", 100, 2, 100);
console.log(darkestLariat.DoAttaque(dommages(darkestLariat, "herbe"), darkestLariat.GetNbAttaque()));