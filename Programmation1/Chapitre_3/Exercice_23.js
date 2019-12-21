const nombre = "1234";

for (let i = 0; i < nombre.length; i++) {
    console.log(Number(nombre[i]));
};

for (let i = nombre.length - 1; i >= 0; i--) {
    console.log(Number(nombre[i]));
};