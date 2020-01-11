const moisDeLannee = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
];

const moisDeLanneALenvers = moisDeLannee.reverse().forEach(mois => document.write(`<span>${mois} </span>`));