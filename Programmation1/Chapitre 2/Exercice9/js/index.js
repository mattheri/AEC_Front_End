const nomUtilisateur = prompt("Entrez le nom d'utilisateur: ");
const motDePasse = prompt("Entrez le mot de passe: ");

if (nomUtilisateur === "admin" && motDePasse === "12345") {
    alert(`Bonjour ${nomUtilisateur}.`);
} else {
    alert("Nom d'utilisateur invalide.");
};