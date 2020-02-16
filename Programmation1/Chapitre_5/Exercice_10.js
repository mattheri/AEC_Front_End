/* Le collège offre 6 options aux étudiants. Ces options sont : 
INFORMATIQUE 
ADMINISTRATION
HISTOIRE 
GÉNIE
GEOGRAPHIE 
BUREAUTIQUE

Mettre ces options dans un tableau, puis demander à un étudiant d’entrer un nom d’option. Vous lui répondez si OUI ou NON le collège offre cette option.
*/

const options = [
    "INFORMATIQUE",
    "ADMINISTRATION",
    "HISTOIRE", 
    "GÉNIE",
    "GEOGRAPHIE",
    "BUREAUTIQUE"
];

const nomOption = prompt(`Entrez une option entre:  INFORMATIQUE 
                                                    ADMINISTRATION
                                                    HISTOIRE 
                                                    GÉNIE
                                                    GEOGRAPHIE 
                                                    BUREAUTIQUE`).toLowerCase();

const disponible = options.some((option) => option === nomOption);

document.write(`<span>L'option ${nomOption} ${disponible ? "est" : "n'est pas"} disponible.</span>`);