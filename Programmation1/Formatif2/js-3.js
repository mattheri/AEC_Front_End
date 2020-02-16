const tabChance = [];

while (tabChance.length !== 100) {
    tabChance.push(Math.floor(Math.random() * 200));
}

let reponseUsager = Number(prompt("Entrez un nombre entre 1 et 200"));

for (let i = 0; i < tabChance.length; i++) {
    if (reponseUsager === i) {
        alert("Votre nombre est inclus dans ce tableau.");
    };
}