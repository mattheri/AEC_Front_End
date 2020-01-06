/*Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00. */

for (let i = 0; i <= 100; i = i +5) {
    const total = i * 1.09;

    document.write(`<span>${total.toFixed(2)}</span><br>`)
};