//Écrire un algorithme qui calcule la note finale d’un étudiant sur 100%.
// Cette note est dérivée des trois notes suivantes :
// note à l’examen de mi-session qui compte pour 30% de la note finale,
// note de l’examen de fin session qui compte pour 50%
// et la note de laboratoire qui compte pour 20%.

const convertirNoteSelonSaValeur = (note, valeur) => {
    const valeurDeLaNoteEnPourcentage = (note * valeur) / 100;
    return valeurDeLaNoteEnPourcentage;
};

const calculerNoteFinaleTotale = (etudiant, noteMiSession, noteFinSession, noteLaboratoire) => {
    console.log(`L'étudiant est ${etudiant}.`);
    console.log(`Sa note de mi-session est de ${noteMiSession}%. Au total, cette note vaut ${convertirNoteSelonSaValeur(noteMiSession, 30)}%.`);
    console.log(`Sa note de fin session est de ${noteFinSession}%. Au total, cette note vaut ${convertirNoteSelonSaValeur(noteFinSession, 50)}%.`);
    console.log(`Sa note de laboratoire est de ${noteLaboratoire}%. Au total, cette note vaut ${convertirNoteSelonSaValeur(noteLaboratoire, 20)}%.`);

    const noteFinale = convertirNoteSelonSaValeur(noteMiSession, 30)
        + convertirNoteSelonSaValeur(noteFinSession, 50)
        + convertirNoteSelonSaValeur(noteLaboratoire, 20);

    console.log(`La note finale de l'étudiant est ${noteFinale}%.`);
};

const nomEtudiant = prompt("Entrez le nom de l'étudiant: ");
const miSession = prompt("Entrez la note de mi-session sur 100: ");
const finSession = prompt("Entrez la note de fin de session sur 100:  ");
const laboratoire = prompt("Entrez la note de laboratoire sur 100: ");

calculerNoteFinaleTotale(nomEtudiant, miSession, finSession, laboratoire);