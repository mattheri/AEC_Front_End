import { Forfait } from './forfait';

export const forfaits: Forfait[] = [
  {
    destination: 'Mexique',
    dateDepart: new Date('2021-02-15'),
    dateRetour: new Date('2021-02-22'),
    prix: 1399.99,
    rabais: 50,
    villeDepart: 'Québec',
    hotel: {
      nom: 'Hotel Emporio Cancun',
      coordonnees:
        'Blvd. Kukulcan Lt45-47, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
      caracteristiques: ['Spa', 'Piscine', 'Restaurants', "Salle d'exercice"],
      nombreEtoiles: 3.5,
      nombreChambres: 1,
    },
    get nbJours() {
      return (
        (this.dateRetour.valueOf() - this.dateDepart.valueOf()) /
        (1000 * 3600 * 24)
      );
    },
  },
  {
    destination: 'Mexique',
    dateDepart: new Date('2021-02-12'),
    dateRetour: new Date('2021-02-22'),
    prix: 1399.99,
    villeDepart: 'Québec',
    hotel: {
      nom: 'Hotel Emporio Cancun',
      coordonnees:
        'Blvd. Kukulcan Lt45-47, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
      caracteristiques: ['Spa', 'Piscine', 'Restaurants', "Salle d'exercice"],
      nombreEtoiles: 2.5,
      nombreChambres: 1,
    },
    get nbJours() {
      return (
        (this.dateRetour.valueOf() - this.dateDepart.valueOf()) /
        (1000 * 3600 * 24)
      );
    },
  },
  {
    destination: 'Mexique',
    dateDepart: new Date('2021-02-08'),
    dateRetour: new Date('2021-02-22'),
    prix: 1399.99,
    villeDepart: 'Québec',
    hotel: {
      nom: 'Hotel Emporio Cancun',
      coordonnees:
        'Blvd. Kukulcan Lt45-47, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
      caracteristiques: [
        'Spa',
        'Piscine',
        'Restaurants',
        "Salle d'exercice",
        'Déjeuner Inclus',
        'Dîner inclus',
        'Souper inclus',
        'Alcool inclus',
      ],
      nombreEtoiles: 4.5,
      nombreChambres: 1,
    },
    get nbJours() {
      return (
        (this.dateRetour.valueOf() - this.dateDepart.valueOf()) /
        (1000 * 3600 * 24)
      );
    },
  },
  {
    destination: 'Mexique',
    dateDepart: new Date('2021-02-08'),
    dateRetour: new Date('2021-02-22'),
    prix: 1399.99,
    villeDepart: 'Québec',
    hotel: {
      nom: 'Hotel Emporio Cancun',
      coordonnees:
        'Blvd. Kukulcan Lt45-47, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
      caracteristiques: ['Spa', 'Piscine', 'Restaurants', "Salle d'exercice"],
      nombreEtoiles: 4.5,
      nombreChambres: 1,
    },
    get nbJours() {
      return (
        (this.dateRetour.valueOf() - this.dateDepart.valueOf()) /
        (1000 * 3600 * 24)
      );
    },
  },
];
