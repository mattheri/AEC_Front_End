import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filtre } from 'src/filtre';
import { Option } from "../../options";

@Component({
  selector: 'app-sidenavform',
  templateUrl: './sidenavform.component.html',
  styleUrls: ['./sidenavform.component.scss']
})
export class SidenavformComponent implements OnInit {

  constructor() { }
  filtre: Filtre = {
    choix: [],
    dateDepart: new Date(Date.now()),
    nbEtoiles: 0,
    nbJours: 7
  }
  // Input nombre de jours START
  choixNbJours: { val: number, text: string }[] = [{ val: 7, text: "7 jours" }, { val: 10, text: "10 jours" }, { val: 14, text: "14 jours" }];
  nbJours = "7";
  changeNbJours(nv: string) {
    this.filtre.nbJours = parseInt(nv);
    this.emitChange();
  }
  // Input nombre de jours END
  // Stars slider START
  changeEtoiles(nv: number) {
    this.filtre.nbEtoiles = nv;
    this.emitChange();
  }
  // Stars slider END
  // Checboxes START
  options: Option[] = [
    { val: "Spa", completed: false, color: "primary" },
    {
      val: "Tout Inclus",
      color: "primary",
      completed: false,
      subVal: [
        { val: "Déjeuner inclus", completed: false, color: "accent" },
        { val: "Dîner inclus", completed: false, color: "accent" },
        { val: "Souper inclus", completed: false, color: "accent" },
        { val: "Alcool Inclus", completed: false, color: "accent" }
      ]
    }
  ];

  allChildCheckboxComplete = false;
  indeterminate: boolean = false;
  noneComplete: boolean = false;

  allComplete(completed: boolean, unit: Option) {
    if (unit.subVal) {
      if (completed) {
        (unit.subVal as Option[]).forEach(option => option.completed = true);
        this.allChildCheckboxComplete = true;
        this.indeterminate = false;
        unit.subVal.forEach(option => this.filtre.choix.push(option));
        this.emitChange();
      };
      if (!completed) {
        (unit.subVal as Option[]).forEach(option => option.completed = false);
        this.allChildCheckboxComplete = false;
        this.indeterminate = false;
        unit.subVal.forEach(option => this.filtre.choix.splice(this.filtre.choix.indexOf(option), 1));
        this.emitChange();
      };
    }
    if (!unit.subVal) {
      if (completed) {
        this.changeCheckbox(unit);
      } else {
        this.removeCheckbox(unit);
      }
    }
  }

  checkIfAllComplete() {
    return this.options.filter(option => option.subVal)[0].subVal.every(option => option.completed);
  }

  checkIfNoneComplete() {
    return this.options.filter(option => option.subVal)[0].subVal.every(option => !option.completed);
  }

  changeToIndeterminate(completed: boolean, unit: Option) {    
    unit.completed = completed;
    this.indeterminate = true;
    this.allChildCheckboxComplete = false;

    if (unit.completed) {
      this.changeCheckbox(unit);
    }
    if (!unit.completed) {
      this.removeCheckbox(unit);
    }

    if (this.options.filter(option => option.subVal)[0].subVal.every(option => option.completed)) {
      this.indeterminate = false;
      this.allChildCheckboxComplete = true;
      this.options.filter(option => option.subVal)[0].completed = true;
    }

    if (this.options.filter(option => option.subVal)[0].subVal.every(option => option.completed === false)) {
      this.indeterminate = false;
      this.allChildCheckboxComplete = false;
      this.options.filter(option => option.subVal)[0].completed = false;
    };
  }

  changeCheckbox(nv: Option) {
    this.filtre.choix.push(nv);
    this.emitChange();
  }
  removeCheckbox(nv: Option) {
    this.filtre.choix.splice(this.filtre.choix.indexOf(nv), 1);
    this.emitChange();
  }
  // Checkboxes END
  // Date START
  changeDate(nd: Date) {
    this.filtre.dateDepart = nd;
    this.emitChange();
  }
  // Date END
  // Input START
  @Input() filtres: Partial<Filtre>;
  // Input END
  // Output START
  @Output() filtresChange = new EventEmitter();
  // Output END
  // Change Event START
  emitChange() {
    this.filtresChange.emit(this.filtre);
  }
  // Change Event END
  ngOnInit(): void {
  }

}
