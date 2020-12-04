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

  ngOnInit(): void {
  }

}
