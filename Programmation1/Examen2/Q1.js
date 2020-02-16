const choisirLeJeep = (choix) => {
    const typesDeJeep = {
        sport: 33290,
        sportS: 37240,
        havane: 39235
    };

    for (let i in typesDeJeep) {
        if (choix === i) {
            return typesDeJeep[i];
        } else {
            console.log("Ce type de Jeep n'est pas disponible.");
        }
    };
};

const choisirLeTerme = (choix) => {
    const terme = [24, 48, 60, 84];

    if (choix === undefined) {
        return terme[0];
    };

    for (let i = 0; i < terme.length; i++) {
        if (choix === terme[i]) {
            return terme[i];
        } else {
            console.log("Ce terme n'est pas disponible.");
        };
    };
};

const choisirLaCouleurDuJeep = (choix) => {

    choix = choix || "bleu";

    if (choix === "rouge" || choix === "vert") {
        return 1399;
    } else {
        return 0;
    };
};

const choisirLaTransmission = (choix) => {
    const typeDeTransmissions = {
        manuelle: 0,
        automatique: 1500,
        automatiqueHuitVitesses: 2400
    };

    for (let i in typeDeTransmissions) {
        if (choix === i) {
            return typeDeTransmissions[i];
        } else {
            console.log("Cette transmission n'est pas disponible.");
        }
    };
};

const jeep = prompt("Veuillez choisir le jeep que vous voulez, vous avez le choix entre Sport, SportS ou Havane.").toLowerCase();
const terme = Number(prompt("Veuillez choisir le terme: 24, 48, 60 ou 84 mois."));
const couleur = prompt("Veuillez choisir la couleur.").toLowerCase();
const transmission = prompt("Veuillez choisir une transmission: Manuelle, automatique ou automatique à 8 vitesses.").toLowerCase();

const calculDeLafacture = () => {
    const sousTotal = choisirLeJeep(jeep) + choisirLaCouleurDuJeep(couleur) + choisirLaTransmission(transmission);
    const taxe = 0.015;
    const taxes = sousTotal * taxe;
    const total = sousTotal + taxes;
    const termeTotal = total / choisirLeTerme(terme);

    const detailDeLaFacture = {
        montantDuTerme: termeTotal,
        tempsTerme: terme,
        modeleDuJeep: jeep,
        transmissionChoisie: transmission,
        couleurChoisie: couleur || "bleu"
    };

    return detailDeLaFacture;
};

alert(`Montant du terme: ${calculDeLafacture().montantDuTerme},
    Temps pour payer: ${calculDeLafacture().tempsTerme} mois,
    Modèle choisi: ${calculDeLafacture().modeleDuJeep},
    Transmission choisie: ${calculDeLafacture().transmissionChoisie},
    Couleur choisie: ${calculDeLafacture().couleurChoisie}`);