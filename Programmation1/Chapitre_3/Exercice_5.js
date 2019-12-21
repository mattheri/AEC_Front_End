
function centFoisRandom () {

    let un = 0;
    
    let zero = 0;
    
    for (let i = 0; i <= 100; i++) {
        
        let nombre = Math.floor(Math.random());

        console.log(nombre)

        if (nombre === 1) {
            un++
        } else {
            zero++
        };
    };

    return un, zero;
}

console.log(centFoisRandom());