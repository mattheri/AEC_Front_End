/*Trouvez les nombres parfaits
On souhaite écrire un programme qui calcule les n premiers nombres parfaits. Un nombre est dit parfait s’il est égal à la somme de ses 
diviseurs, 1 compris.
   
Exemple : 6 = 1+2+3 , est un nombre parfait.*/

const estParfait = (nombre) => {

    for (let i = 1; i <= nombre; i++) {
        const temp = nombre % i;

        if (temp === 0) {
            const digitTemp = i;

            for (let j = 0; i < digitTemp; i++) {

                if (nombre % (digitTemp + digitTemp) === 0) {
                    console.log(j);
                };
            };
        }
    };
};

estParfait(1000);