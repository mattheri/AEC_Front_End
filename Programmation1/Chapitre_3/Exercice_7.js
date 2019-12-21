
function rouleJusqua (mot) {

    let nombre = 0;

    function incremente () {
        return nombre = nombre + 1;
    };

    const estPatate = !!(mot === "patate");

    do {
        prompt("Entrez le mot secret: ");
        console.log(incremente());
    } while (!estPatate);
};

rouleJusqua("patate");