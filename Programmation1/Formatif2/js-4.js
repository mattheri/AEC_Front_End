class MonnaieVirtuelle {
    constructor(nomMonnaie, valeurEnUSD, actif) {
        this.nomMonnaie = nomMonnaie;
        this.valeurEnUSD = valeurEnUSD;
        this.actif = actif;
        this.actifUSD = this.GetActifUSD();
    };

    GetActifUSD() {
        return this.actif * this.valeurEnUSD;
    };
};

class Portefeuille {
    constructor(nomProprietaire, tableauMonnaie) {
        this.nomProprietaire = nomProprietaire;
        this.tableauMonnaie = tableauMonnaie;
    };

    GetValeurPortefeuille() {
        const valeur = this.tableauMonnaie
            .map(obj => obj.actifUSD)
            .reduce((acc, val) => val + acc);
        return valeur;
        /*let valeur = 0;

        for (let i = 0; i < this.tableauMonnaie.length; i++) {
            valeur = valeur + this.tableauMonnaie[i].actifUSD;
        };

        return valeur;*/
    };
};

const bitcoin = new MonnaieVirtuelle("BitCoin", 9730, 6);
const ethereum = new MonnaieVirtuelle("Ethereum", 194, 20);
const litecoin = new MonnaieVirtuelle("LiteCoin", 58, 10);
const portefeuille = new Portefeuille("Shany Carle", [bitcoin, ethereum, litecoin]);
console.log(portefeuille.GetValeurPortefeuille());