/*Le prix saisonnier d’un billet pour la ronde est de 50$. Toutefois, il y a des possibilités de rabais pour des inscriptions en groupe :
Aucun rabais pour moins de 10 personnes.
10 personnes et plus, 5% de rabais.
20 personnes et plus, 10% de rabais.
30 personnes et plus, 15% de rabais.
40 personnes et plus, 20% de rabais.

Écrivez un programme qui demande, pour une inscription donnée, le nombre de personnes et affichera le montant de l’inscription à la fin. */

var prixBilletSaisonnier = 50;

var rabais10 = 0.05;

var rabais20 = 0.10;

var rabais30 = 0.15;

var rabais40 = 0.20;

var nombreDePersonnes = Number(prompt("Entrez le nombre de personnes dans le groupe: "));

var message = "Le montant de l'inscription selon le nombre de personnes dans votre groupe est de ";

if (nombreDePersonnes < 10) {

    document.write(message += prixBilletSaisonnier + "$.");

} else if (nombreDePersonnes >= 10 && nombreDePersonnes < 20) {

    prixBilletSaisonnier = prixBilletSaisonnier - (prixBilletSaisonnier * rabais10);

    document.write(message += prixBilletSaisonnier + "$.");

} else if (nombreDePersonnes >= 20 && nombreDePersonnes < 30) {

    prixBilletSaisonnier = prixBilletSaisonnier - (prixBilletSaisonnier * rabais20);

    document.write(message += prixBilletSaisonnier + "$.");

} else if (nombreDePersonnes >= 30 && nombreDePersonnes < 40) {

    prixBilletSaisonnier = prixBilletSaisonnier - (prixBilletSaisonnier * rabais30);

    document.write(message += prixBilletSaisonnier + "$.");

} else {

    prixBilletSaisonnier = prixBilletSaisonnier - (prixBilletSaisonnier * rabais40);
    
    document.write(message += prixBilletSaisonnier + "$.");

};