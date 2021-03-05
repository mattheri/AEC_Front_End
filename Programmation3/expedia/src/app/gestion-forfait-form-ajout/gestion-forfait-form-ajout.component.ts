import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Forfait } from 'src/forfait';
import { ForfaitsService } from '../forfaits.service';

@Component({
  selector: 'app-gestion-forfait-form-ajout',
  templateUrl: './gestion-forfait-form-ajout.component.html',
  styleUrls: ['./gestion-forfait-form-ajout.component.scss'],
})
export class GestionForfaitFormAjoutComponent implements OnInit {
  constructor(
    private forfaitsService: ForfaitsService,
    public dialog: MatDialog
  ) {}
  destinations = ['Mexique', 'République Dominicaine', 'Costa Rica'];
  villeDepart = ['Québec', 'Montréal'];
  checkbox: [
    'Face à la plage',
    "Dans un lieu situé à proximité d'un parc/lieu naturel",
    'Ascenseur',
    'Miniclub',
    'Mariages',
    'Plage',
    'Spa',
    'Déjeuner inclus',
    'Dîner inclus',
    'Souper inlcus',
    'Restaurants'
  ];
  @Input() forfaits: Forfait[];
  @Input() close: () => void;
  local_data: Forfait = {
    dateDepart: new Date(Date.now()),
    dateRetour: new Date(Date.now()),
    destination: '',
    hotel: {
      caracteristiques: [],
      coordonnees: '',
      nom: '',
      nombreChambres: 0,
      nombreEtoiles: 0,
    },
    nbJours: 0,
    prix: 0,
    villeDepart: '',
    rabais: 0,
    da: '1996386',
  };

  updateDestination(value: string) {
    console.log(value);
    this.local_data.destination = value;
  }
  updateDateDepart(value: Date) {
    this.local_data.dateDepart = value;
    this.updateNbJours(value);
  }
  updateVilleDepart(value: string) {
    this.local_data.villeDepart = value;
  }
  updateDateRetour(value: Date) {
    this.local_data.dateRetour = value;
    this.updateNbJours(null, value);
  }
  updateNomHotel(value: string) {
    this.local_data.hotel.nom = value;
  }
  updateCoordoneesHotel(value: string) {
    this.local_data.hotel.coordonnees = value;
  }
  updateNbEtoiles(value: number) {
    this.local_data.hotel.nombreEtoiles = value;
  }
  updateNbChambres(value: number) {
    this.local_data.hotel.nombreChambres = value;
  }
  updatePrix(value: number) {
    this.local_data.prix = value;
  }
  updateRabais(value: number) {
    this.local_data.rabais = value;
  }
  updateNbJours(dateDepart?: Date, dateRetour?: Date) {
    const depart = dateDepart || this.local_data.dateDepart;
    const retour = dateRetour || this.local_data.dateRetour;

    this.local_data.nbJours = parseInt(
      (
        Math.round(retour.valueOf() - depart.valueOf()) / (1000 * 3600 * 24) +
        1
      ).toFixed(0)
    );
  }
  updateVedette(value: boolean) {
    this.local_data.vedette = value;
  }

  ajoutForfait(event, forfait: Forfait) {
    event.preventDefault();
    this.forfaitsService.addForfait(forfait).subscribe((result) => {
      if (result._id) {
        this.dialog.closeAll();
      }
    });
  }

  validate() {
    const {
      dateDepart,
      dateRetour,
      destination,
      hotel: { coordonnees, nom, nombreChambres, nombreEtoiles },
      prix,
      villeDepart,
    } = this.local_data;
    const validator =
      dateDepart &&
      dateRetour &&
      destination.length &&
      coordonnees.length &&
      nom.length &&
      nombreChambres > 0 &&
      nombreEtoiles > 0 &&
      prix > 0 &&
      villeDepart.length;

    if (validator) {
      return false;
    }

    return true;
  }

  ngOnInit(): void {}
}
