import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-forfait-form',
  templateUrl: './gestion-forfait-form.component.html',
  styleUrls: ['./gestion-forfait-form.component.scss']
})
export class GestionForfaitFOrmComponent implements OnInit {

  constructor() { }

  destinations = ["Mexique", "République Dominicaine", "Costa Rica"];
  villeDepart = ["Québec", "Montréal"];
  checkbox: [
    "Face à la plage",
    "Dans un lieu situé à proximité d'un parc/lieu naturel",
    "Ascenseur",
    "Miniclub",
    "Mariages",
    "Plage",
    "Spa",
    "Déjeuner inclus",
    "Dîner inclus",
    "Souper inlcus",
    "Restaurants"
  ]

  ngOnInit(): void {
  }

}
