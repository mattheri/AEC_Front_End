const mois = Number(prompt("Entrez le mois selon son chiffre: "));

if (mois > 12) {
    alert("Mois invalide");
} else {
    switch (mois) {
        case 1:
            alert("Janvier");
            break;
        case 2:
            alert("Février");
            break;
        case 3:
            alert("Mars");
            break;
        case 4:
            alert("Avril");
            break;
        case 5:
            alert("Mai");
            break;
        case 6:
            alert("Juin");
            break;
        case 7:
            alert("Juillet");
            break;
        case 8:
            alert("Août");
            break;
        case 9:
            alert("Septembre");
            break;
        case 10:
            alert("Octobre");
            break;
        case 11:
            alert("Novembre");
            break;
        default:
            alert("Décembre");
    }
}