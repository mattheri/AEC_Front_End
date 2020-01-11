const pileOuFace = []

for (let i = 0; i < 5; i ++) {
    pileOuFace.push("pile");
};

for (let j = 0; j < 5; j ++) {
    pileOuFace.push("face");
};

pileOuFace.forEach(valeur => document.write(`<span>${valeur}</span><br>`));
