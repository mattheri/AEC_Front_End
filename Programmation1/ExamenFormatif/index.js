//Question 2
var pointsDeDommages;
var hp = Number(prompt("Entrez les points de vie restants: "));

if (hp < 60) {
    pointsDeDommages = 100;
    console.log(hp - pointsDeDommages);
} else if (hp < 80) {
    pointsDeDommages = 150;
    console.log(hp - pointsDeDommages);
} else if (hp < 100) {
    pointsDeDommages = 200;
    console.log(hp - pointsDeDommages);
} else if (hp >= 100) {
    pointsDeDommages = 250;
    console.log(hp - pointsDeDommages);
};

//Question 5
var angle = Number(prompt("Entrez l'angle de la main du robot: "));
var positionDeLaMain;

if (!angle) {
    positionDeLaMain = "Le robot est hors de contrôle.";
    alert(positionDeLaMain);
} else if (angle < 40) {
    positionDeLaMain = "Main fermée";
    alert(positionDeLaMain);
} else if (angle < 89) {
    positionDeLaMain = "Main agrippe";
    alert(positionDeLaMain);
} else if (angle < 180) {
    positionDeLaMain = "Main ouverte";
    alert(positionDeLaMain);
};

//Question 6
var coutRaspberryPi = 55;
var coutRaspberryPiZero = 15;
var controleurChoisi = prompt("Entrez le contrôleurs désiré soit RaspBerry Pi ou RaspBerry Pie Zero: ").toUpperCase().replace(/\s+/g, '');
var controleurChoisiAfficher = controleurChoisi === "RASPBERRYPI" ? "RaspBerry Pi" : "RaspBerry Pi Zero";;

var coutMoteur = 5;
var nombreDeMoteurs = Number(prompt("Entrez le nombre de moteurs. Minimum de 2 et maximum de 24 moteurs: "));

var coutCameraUsb = 35;
var cameraUsb = prompt("Voulez-vous une caméra USB, oui ou non?: ").toUpperCase().replace(/\s+/g, '');

var coutMatriceDeLed = 10;
var matriceDeLed = prompt("Voulez-vous une matrice de LED pour les yeux? Oui ou non: ").toUpperCase().replace(/\s+/g, '');

var coutFilament3D = 20;
var coutBatterieUSB = 15;

var prixSansLivraison = coutFilament3D + coutBatterieUSB;
var livraison = 1.15;
var resumeDeLaCommande = "Robot avec " + controleurChoisiAfficher + ", " + nombreDeMoteurs + " moteurs";


if (controleurChoisi === "RASPBERRYPI") {
    prixSansLivraison += coutRaspberryPi;
} else if (controleurChoisi === "RASPBERRYPIZERO") {
    prixSansLivraison += coutRaspberryPiZero;
};

if (nombreDeMoteurs < 24 || nombreDeMoteurs > 2) {
    prixSansLivraison += (nombreDeMoteurs * coutMoteur);
};

if (cameraUsb === "OUI") {
    prixSansLivraison += coutCameraUsb;
    resumeDeLaCommande += ", une caméra, ";
} else {
    resumeDeLaCommande += ", pas de caméra, ";
};

if (matriceDeLed === "OUI") {
    prixSansLivraison += coutMatriceDeLed;
    resumeDeLaCommande += "une matrice de LEDS pour les yeux.";
} else {
    resumeDeLaCommande += "pas de matrice de LEDS";
};

alert(resumeDeLaCommande);
alert("Le prix de votre commande sans la livraison est de " + 
        prixSansLivraison + "$. Le prix de votre commande avec la livraison est de " + 
        (livraison * prixSansLivraison) + "$");



