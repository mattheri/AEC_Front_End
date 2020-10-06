/*Vous devez compléter un programme qui permet de calculer une facture pour l’achat d’une grande Pizza.

Le prix de base de la Pizza au fromage est de 10$.

Si on veut des légumes, il faut ajouter 5$ au prix initial.

Si on veut du pepperoni, il faut ajouter 8$ au prix initial.

Si on veut de la sauce, il faut ajouter 1$ par personnes.

Le TPS s’élève à 5% du prix sans les taxes.

Le TVQ s’élève à 9,975% du prix sans les taxes.


Produisez une facture qui résume l’achat, le prix avant et après les taxes.*/

var prixPizzaAuFromage = 10;

var ajoutLegumes = 5;

var ajoutPepperoni = 8;

var ajoutSauce = 1;

var TPS = 0.05;

var TVQ = 0.09975;

var sousTotal = prixPizzaAuFromage;

var legumes = prompt("Désirez-vous des légumes sur votre pizza? Oui ou non: ").toLowerCase();

var pepperoni = prompt("Désirez-vous du pepperoni sur votre pizza? Oui ou non: ").toLowerCase();

var sauce = prompt("Désirez-vous de la sauce sur votre pizza? Oui ou non: ").toLowerCase();

if (legumes === "oui") {
    sousTotal += ajoutLegumes;
};

if (pepperoni === "oui") {
    sousTotal += ajoutPepperoni;
};

if (sauce === "oui") {
    var nombreDePersonnes = Number(prompt("Combien de personnes êtes-vous?"));
    var totalSauce = ajoutSauce * nombreDePersonnes;
    sousTotal += totalSauce;
};

var sousTotalAvecTps = sousTotal * TPS;

var sousTotalAvecTvq = sousTotal * TVQ;

var taxes = sousTotalAvecTps + sousTotalAvecTvq;

var total = sousTotal + taxes;

document.write("Le total de votre facture est de " + total + "$."); 