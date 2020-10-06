const tab2Exp = [];
let index = 16;

while (index--) {
    let valeur = Math.pow(index);
    tab2Exp.push(valeur.toFixed(0));
};

tab2Exp.reverse().forEach((val, i) => {
    document.write(`<span>${i}:${val}</span><br>`)
});