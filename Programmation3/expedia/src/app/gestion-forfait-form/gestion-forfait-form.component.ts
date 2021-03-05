import { Component, OnInit, Input, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Forfait } from 'src/forfait';
import { ForfaitsService } from '../forfaits.service';

@Component({
  selector: 'app-gestion-forfait-form',
  templateUrl: './gestion-forfait-form.component.html',
  styleUrls: ['./gestion-forfait-form.component.scss'],
})
export class GestionForfaitFOrmComponent implements OnInit {
  constructor(
    private forfaitsService: ForfaitsService,
    public dialog: MatDialog
  ) {}
  @Input() forfait: Forfait;
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

  local_data: Forfait = {
    dateDepart: 0,
    dateRetour: 0,
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
    vedette: false,
  };

  updateDestination(value: string) {
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
    const depart = dateDepart || new Date(this.forfait.dateDepart);
    const retour = dateRetour || new Date(this.forfait.dateRetour);

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

  updateForfait(event, data: Forfait) {
    event.preventDefault();
    this.forfaitsService
      .updateForfait(data, this.forfait._id)
      .subscribe((result) => {
        this.dialog.closeAll();
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

  ngOnInit(): void {
    this.local_data = this.forfait;
  }
}
