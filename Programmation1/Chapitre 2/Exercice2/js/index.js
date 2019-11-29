const achat1 = Number(prompt("Entrez le montant du premier achat: "));
const achat2 = Number(prompt("Entrez le montant du deuxième achat: "));
const montantRequis = 200;
const montantTotal = achat1 + achat2;
const reduction = montantTotal * 0.15
const montantReduis = montantTotal - reduction;

if ((achat1 + achat2) >= montantRequis) {
    alert(`${montantReduis}`);
} else {
    alert(`${montantTotal}`);
}