import { Component, OnInit } from '@angular/core';
import { Option } from "../../options";

@Component({
  selector: 'app-sidenavform',
  templateUrl: './sidenavform.component.html',
  styleUrls: ['./sidenavform.component.scss']
})
export class SidenavformComponent implements OnInit {

  constructor() { }
  choixNbJours: { val: number, text: string }[] = [{ val: 7, text: "7 jours" }, { val: 10, text: "10 jours" }, { val: 14, text: "14 jours" }];
  nbJours = "7";
  options: Option[] = [
    { val: "Spa", completed: false, color: "primary" },
    {
      val: "Tout Inclus",
      color: "primary",
      completed: true,
      subVal: [
        { val: "Déjeuner inclus", completed: true, color: "accent" },
        { val: "Dîner inclus", completed: true, color: "accent" },
        { val: "Souper inclus", completed: true, color: "accent" },
        { val: "Alcool Inclus", completed: true, color: "accent" }
      ]
    }
  ];
  toutInclus: boolean = true;
  updateToutInclus() {
    this.toutInclus = this.options.filter(option => option.subVal).every(completeness => completeness.completed);
  }

  updatePasUnToutInclusMaisPresque() {
    // si j'ai pas de subVal do nothing;
    if (!this.options.filter(option => option.subVal).length) {
      return false;
    }
     
    // je filtre mon objet pour sortir seulement ceux qui ont un subval ensuite je filtre 
    // les subval qui return true et je retourne true seulement quand toutInclus est aussi false
    return this.options.filter(option => option.subVal).filter(option => option.completed) && !this.toutInclus;
  }

  updateToutInclusOnCheckbox(complete: boolean) {
    this.toutInclus = complete;
    if (this.options.filter(option => option.subVal).length) {
      return;
    }

    this.options.filter(option => option.subVal).forEach(option => option.completed = complete);
  }

  ngOnInit(): void {
  }

}
