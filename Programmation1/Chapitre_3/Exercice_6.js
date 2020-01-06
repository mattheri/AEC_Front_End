
function afficheLeMot(mot, nombreDeFois) {

    for (let i = 0; i < nombreDeFois; i++) {
        document.write(`<span>${mot} </span>`);
    };
};

afficheLeMot("ATTENTION", 15);