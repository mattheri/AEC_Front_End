//Faire l’algorithme qui permet de calculer la facture d’un client. Cette facture contient la date,
// le montant de chacun des 3 articles achetés, les taxes de vente et le grand total de la facture.
// Vous demandez à l'usager la date et le montant de chacun des 3 articles achetés. Le montant de TPS est de 5%
// et la TVQ est de 9.975%. Vous affichez la date, les 2 montants de taxes et le grand total.

var prix;
var date;

const retourDuPrixDetaillee = (prixArticle, dateArticle) => {
    var tps = prixArticle * 0.05;
    var tvq = prixArticle * 0.0975;
    var total = prixArticle + tvq + tps;
    console.log(`La date d'achat de l'article est le ${dateArticle}`);
    console.log(`Le montant de la TPS est de ${tps}$`);
    console.log(`Le montant de la TVQ est de ${tvq}$`);
    console.log(`Le montant total de l'article est de ${total}$`);
};

//Premier article
date = Number(prompt("Entrez la date d'achat du premier article: "));
prix = Number(prompt("Entrez le prix du premier article: "));
retourDuPrixDetaillee(prix, date);

//Deuxième article
date = Number(prompt("Entrez la date d'achat du deuxième article: "));
prix = Number(prompt("Entrez le prix du deuxième article: "));
retourDuPrixDetaillee(prix, date);

//Troisième article
date = Number(prompt("Entrez la date d'achat du troisième article: "));
prix = Number(prompt("Entrez le prix du troisième article: "));
retourDuPrixDetaillee(prix, date);
