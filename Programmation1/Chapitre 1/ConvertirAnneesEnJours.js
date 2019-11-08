var nom = String(prompt("Entrez votre nom: "));
var age = Number(prompt("Entrez votre age: "));
var anneesEnJour = age * 365;

document.getElementById("reponse").innerText = `Salut ${nom}! Ton âge en jours est: ${anneesEnJour} jours`;