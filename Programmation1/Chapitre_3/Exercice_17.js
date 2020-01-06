/*Lire le code de sexe d’un individu (M ou F) et afficher le sexe de l’individu 
par le mot correspondant (Masculin ou Féminin). Traiter plusieurs codes de sexe jusqu’à temps 
que ce code soit autre chose que M ou F. De plus afficher le nombre de M qui ont été 
entrés ainsi que le nombre de F qui ont été entrés.*/

do {

    var sexe = prompt("Entre le sexe de la personne: ").toUpperCase();

    var male = [];
    var female = [];

    if (sexe === "M") {
        male.push(sexe);
    };

    if (sexe === "F") {
        female.push(sexe);
    };

} while (sexe !== "M" || sexe !== "F");

document.write(`<span>Nombre d'hommes: ${male.lenght}</span><br><span>Nombre de femmes: ${female.length}</span>`);