
function centFoisRandom () {

    let un = 0;
    
    let zero = 0;
    
    for (let i = 0; i < 100; i++) {
        
        let nombre = Math.floor(Math.random() * 2);

        if (nombre === 1) {
            un++
        } else {
            zero++
        };
    };

    document.write(`nombre de zéro: ${zero}. nombre de un: ${un}`);
}

centFoisRandom();