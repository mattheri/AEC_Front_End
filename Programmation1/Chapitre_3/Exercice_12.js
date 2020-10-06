/*Le premier jour de l'ouverture de votre compte, vous déposez .01 . 
À chaque jour pendant 10 jours, vous déposez le double de la veille. 
Affichez pour chaque jour, le numéro du jour, le montant déposé et le solde de votre compte.*/

let depotInitial = 0.01;

function doubleDepotInitial () {
    return depotInitial = depotInitial * 2;
};

for (let i = 0; i < 10; i ++) {
    document.write(`<span>jour ${i + 1}: ${doubleDepotInitial()} </span>`)
}