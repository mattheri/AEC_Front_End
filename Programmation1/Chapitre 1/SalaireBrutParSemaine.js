var salaire = Number(prompt("Entrez votre salaire: "));
var heuresTravaillees = Number(prompt("Entrez le nombre d'heures que vous avez travaillé: "));
var salaireBrut = salaire * heuresTravaillees;

document.getElementById("reponse").innerText = salaireBrut;