const semaine = 40;
const salaire = Number(prompt("Entrez le salaire par heure: "));
const heuresTravaillees = Number(prompt("Entrez le nombre d'heures travaillées: "));
let paye = salaire * semaine;

if (heuresTravaillees > semaine) {
    const heuresSupplementaires = semaine - heuresTravaillees;
    const salaireDouble = heuresSupplementaires * 2;
    paye += salaireDouble;
    alert(paye);
} else {
    alert(paye);
}