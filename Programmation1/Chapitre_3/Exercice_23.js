const nombre = "1234";

for (let i = 0; i < nombre.length; i++) {
    document.write(`<span>${Number(nombre[i])}</span><br>`)
};

for (let i = nombre.length - 1; i >= 0; i--) {
    document.write(`<span>${Number(nombre[i])}</span><br>`)
};