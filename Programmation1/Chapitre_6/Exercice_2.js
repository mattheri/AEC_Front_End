class Cylindre {

    constructor(hauteur, rayon) {
        this.hauteur = hauteur;
        this.rayon = rayon;
    };

    GetVolume() {
        return this.hauteur * this.rayon;
    };
};


class Boite {

    constructor(cylindres) {
        this.cylindres = cylindres;
    };

    GetVolumeBoite() {
        let volume = 0;

        for (let i in this.cylindres) {
            volume += this.cylindres[i].GetVolume()
        };

        return volume;
    };
};

const c1 = new Cylindre(4, 5);
const c2 = new Cylindre(4, 5);
const c3 = new Cylindre(4, 5);
const c4 = new Cylindre(4, 5);
const c5 = new Cylindre(4, 5);

const boite1 = new Boite([c1, c2, c3, c4, c5]);

console.log(boite1.GetVolumeBoite());