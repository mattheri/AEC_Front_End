/*Afficher les nombres impairs de 1 à 49, et mettre 5 valeurs par ligne.*/

let i;

const valeurs = [];

for (i = 0; i <= 49; i++) {

    if (i % 2 != 0) {
        valeurs.push(i);
    }
}

for (let j = 0; j <= valeurs.length; j ++) {

    if (j % 5 === 0) {

        if (valeurs[j -4] !== undefined) {
            if (valeurs[j -3] !== undefined) {
                if (valeurs[j -2] !== undefined) {
                    if (valeurs[j -1] !== undefined) {
                        if (valeurs[j] !== undefined) {
                            console.log(valeurs[j -4], valeurs[j -3], valeurs[j -2], valeurs[j -1], valeurs[j])
                        }
                    }
                }
            }
        }
    }
};