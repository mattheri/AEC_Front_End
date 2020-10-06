var article = String(prompt("Entrez le nom de l'article: "));
var prix = Number(prompt(`Entrez le prix de l'article ${article}: `));
var prixDeGros = prix * (66/100);
var profit = prix - prixDeGros;

document.getElementById("reponse").innerText = `L'article est ${article}. Le prix de détail est ${prix}$ et le prix de gros est ${prixDeGros}$. Le profit attendu est ${profit}$`;
console.log(`L'article est ${article}. Le prix de détail est ${prix}$ et le prix de gros est ${prixDeGros}$. Le profit attendu est ${profit}$`);