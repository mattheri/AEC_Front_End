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
      if (completed) (unit.subVal as Option[]).forEach(option => option.completed = true), this.allChildCheckboxComplete = true;
      if (!completed) (unit.subVal as Option[]).forEach(option => option.completed = false), this.allChildCheckboxComplete = false, this.indeterminate = false;
    }

    console.log(this.indeterminate);
  }

  checkIfAllComplete() {
    console.log(this.options.filter(option => option.subVal)[0].subVal.forEach(option => console.log(option.completed)));
    return this.options.filter(option => option.subVal)[0].subVal.every(option => option.completed);
  }

  checkIfNoneComplete() {
    return this.options.filter(option => option.subVal)[0].subVal.every(option => !option.completed);
  }

  changeToIndeterminate(completed: boolean, unit: Option) {
    unit.completed = true;
    if (completed && this.checkIfAllComplete()) {
      this.indeterminate = false;
      this.options.filter(option => option.subVal)[0].completed = true;
      this.allChildCheckboxComplete = true;
    }

    unit.completed = completed;
    this.indeterminate = true;
    this.allChildCheckboxComplete = false;

    this.noneComplete = this.checkIfNoneComplete();

    if (this.noneComplete) this.options.filter(option => option.subVal)[0].completed = false;
  }

  ngOnInit(): void {
  }

}
