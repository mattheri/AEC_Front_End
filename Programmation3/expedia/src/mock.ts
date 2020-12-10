import { Forfait } from './forfait';

export const forfaits: Forfait[] = [
    {
        destination: "Mexique",
        dateDepart: new Date("2021-02-15"),
        dateRetour: new Date("2021-02-22"),
        prix: 1399.99,
        rabais: 50,
        villeDepart: "Québec",
        hotel: {
            nom: "Hotel Emporio Cancun",
            coordonnees: "Blvd. Kukulcan Lt45-47, Zona Hotelera, 77500 Cancún, Q.R., Mexico",
            caracteristiques: ["Spa", "Piscine", "Restaurants", "Salle d'exercice"],
            etoiles: 3.5,
            nbChambres: 1
        },
        get nbJours() {
            return (this.dateRetour.valueOf() - this.dateDepart.valueOf())/ (1000 * 3600 * 24)
        }
    },
    {
        destination: "Mexique",
        dateDepart: new Date("2021-02-12"),
        dateRetour: new Date("2021-02-22"),
        prix: 1399.99,
        villeDepart: "Québec",
        hotel: {
            nom: "Hotel Emporio Cancun",
            coordonnees: "Blvd. Kukulcan Lt45-47, Zona Hotelera, 77500 Cancún, Q.R., Mexico",
            caracteristiques: ["Spa", "Piscine", "Restaurants", "Salle d'exercice"],
            etoiles: 2.5,
            nbChambres: 1
        },
        get nbJours() {
            return (this.dateRetour.valueOf() - this.dateDepart.valueOf())/ (1000 * 3600 * 24)
        }
    },
    {
        destination: "Mexique",
        dateDepart: new Date("2021-02-08"),
        dateRetour: new Date("2021-02-22"),
        prix: 1399.99,
        villeDepart: "Québec",
        hotel: {
            nom: "Hotel Emporio Cancun",
            coordonnees: "Blvd. Kukulcan Lt45-47, Zona Hotelera, 77500 Cancún, Q.R., Mexico",
            caracteristiques: ["Spa", "Piscine", "Restaurants", "Salle d'exercice", "Déjeuner Inclus", "Dîner inclus", "Souper inclus", "Alcool inclus"],
            etoiles: 4.5,
            nbChambres: 1
        },
        get nbJours() {
            return (this.dateRetour.valueOf() - this.dateDepart.valueOf())/ (1000 * 3600 * 24)
        }
    },
    {
        destination: "Mexique",
        dateDepart: new Date("2021-02-08"),
        dateRetour: new Date("2021-02-22"),
        prix: 1399.99,
        villeDepart: "Québec",
        hotel: {
            nom: "Hotel Emporio Cancun",
            coordonnees: "Blvd. Kukulcan Lt45-47, Zona Hotelera, 77500 Cancún, Q.R., Mexico",
            caracteristiques: ["Spa", "Piscine", "Restaurants", "Salle d'exercice"],
            etoiles: 4.5,
            nbChambres: 1
        },
        get nbJours() {
            return (this.dateRetour.valueOf() - this.dateDepart.valueOf())/ (1000 * 3600 * 24)
        }
    }
]