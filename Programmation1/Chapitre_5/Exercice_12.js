/*Mettre dans un tableau les 10 bonnes réponses à un test objectif (vrai ou faux). Par la suite, faire la correction du test d’un étudiant en lisant ses 10 réponses et afficher sa note sur 10.*/

const corrige = [];
const reponsesEleve = [];
const length = 10;
let note = length;

while (corrige.length < length) {
    const nombre = Math.floor(Math.random() * 2);

    !!(nombre === 1) && corrige.push(true);
    !!(nombre !== 1) && corrige.push(false);
};

while (reponsesEleve.length < length) {
    const reponse = prompt("Entrez v pour vrai ou f pour faux").toLowerCase();

    !!(reponse === "v") && reponsesEleve.push(true);
    !!(reponse === "f") && reponsesEleve.push(false);
};

for (let i = 0; i < length; i++) {

    !!(corrige[i] !== reponsesEleve[i]) && note--;
};

document.write(`Voici ta note sur ${length}: ${note}/${length}`);