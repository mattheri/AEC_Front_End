/*Vous devez compléter un programme qui permet de calculer l’aire de formes.
En entrée, l'utilisateur doit entrer la lettre correspondant au type de figure demandé:
- "O" pour cercle : PI * rayon2
- "R" pour rectangle : longueur * largeur
- "T" pour triangle rectangle : (longueur * largeur) / 2
- "C" pour carré : côté2

L’utilisateur doit pouvoir entrer son choix en lettres minuscules ou en majuscules. 

En fonction de la lettre saisie par le client, votre programme doit demander les renseignements nécessaires pour le calcul de l’aire. 


Une fois les informations saisies par l'utilisateur, votre programme doit afficher le type sélectionné ainsi que le calcul de l'aire.*/

var forme = prompt("Entrez la forme dont vous désirez calculer l'aire: ").toLowerCase();

if (forme === "o") {

    var rayon = Number(prompt("Entrez la longueur du rayon en mm: "));

    var aireDuCercle = Math.PI * Math.pow(rayon, 2);

    document.write("Vous désirez calculer l'aire d'un cercle dont le rayon est de " + rayon + ".");

    setTimeout(() => {
        document.write("Je calcule... Pi * le rayon au carré...");
    }, 3000);

    setTimeout(() => {
        document.write("L'aire du cercle est de " + aireDuCercle + "mm carré.");
    }, 4500);

} else if (forme === "r") {

    var longueur = Number(prompt("Entrez la longeur du rectangle en mm: "));

    var largeur = Number(prompt("Entrez la largeur du rectangle en mm: "));

    var aireDuRectangle = longueur * largeur;

    document.write("Vous désirez calculer l'aire d'un rectangle dont la longueur est de " + longueur + "mm et la largeur est de " + largeur + "mm.");

    setTimeout(() => {
        document.write("Je calcule... longueur par largeur...");
    }, 3000);

    setTimeout(() => {
        document.write("L'aire du rectangle est de " + aireDuRectangle + "mm carré.");
    }, 4500);

} else if (forme === "t") {

    var longueur = Number(prompt("Entrez la longeur du triangle en mm: "));

    var largeur = Number(prompt("Entrez la largeur du triangle en mm: "));

    var aireDuTriangle = (longueur * largeur) / 2;

    document.write("Vous désirez calculer l'aire d'un triangle dont la longueur est de " + longueur + "mm et la largeur est de " + largeur + "mm.");

    setTimeout(() => {
        document.write("Je calcule... longueur par largeur... Je divise ensuite par deux...");
    }, 3000);

    setTimeout(() => {
        document.write("L'aire du triangle est de " + aireDuTriangle + "mm carré.");
    }, 4500);

} else {

    var cote = Number(prompt("Entrez la mesure d'un côté du carré en mm: "));

    var aireDuCarre = Math.pow(cote, 2);

    document.write("Vous désirez calculer l'aire d'un carré dont la mesure des côté est de " + cote + "mm.");

    setTimeout(() => {
        document.write("Je calcule... côté exposant deux...");
    }, 3000);

    setTimeout(() => {
        document.write("L'aire du carré est de " + aireDuCarre + "mm carré.");
    }, 4500);

}