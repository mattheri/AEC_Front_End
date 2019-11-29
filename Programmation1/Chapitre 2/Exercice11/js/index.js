const lettre = prompt("Entrez une lettre directionelle entre W, A, S et D: ").toUpperCase();

switch (lettre) {
    case "W":
        alert("Avancer");
        break;
    case "A":
        alert("Gauche");
        break;
    case "S":
        alert("Droite");
        break;
    case "D":
        alert("Reculer");
        break;
    default:
        console.error("Mauvais lettre entrée.");
};