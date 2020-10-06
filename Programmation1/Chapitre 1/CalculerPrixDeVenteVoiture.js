//Le prix de vente d’une voiture neuve est la somme du prix de base,
// d’un montant de frais et d'un montant de profit du concessionnaire et des montants taxes de ventes.
// Les frais sont de 2% du prix de base et le pourcentage du concessionnaire est de 12% du prix de base.
// et le premier montant de taxe de vente est de 5% du sous-total du prix de base,
// des frais et du profit du concessionnaire et le deuxième montant de taxe est de 9,975% du prix de base,
// des frais et du profit du concessionnaire.
// Écrire l’algorithme qui lit le prix de base et qui imprime le montant de frais, le montant de commission,
// les deux montants de taxes et le prix de vente total, le tout sur des lignes différentes avec des messages explicites.

const retournerInformationsDePrixDetaillee = (prixDeBase) => {
    var frais = prixDeBase * 0.02;
    var profit = prixDeBase * 0.012;
    var tvq = (prixDeBase + frais + profit) * 0.05;
    var tps = (prixDeBase + frais + profit) * 0.0975;
    var taxesDeVente = tvq + tps;
    var prixDeVente = prixDeBase + frais + taxesDeVente;
    console.log(`Les frais sont de ${frais}$`);
    console.log(`Les profits sont de ${profit}$`);
    console.log(`Le montant de la TVQ est de ${tvq}$`);
    console.log(`Le montant de la TPS est de ${tps}$`);
    console.log(`Le montant des taxes est de ${taxesDeVente}$`);
    console.log(`Le montant total est de ${prixDeVente}$`);
};

var prixDemande = Number(prompt("Entrez le prix demandé: "));

retournerInformationsDePrixDetaillee(prixDemande);