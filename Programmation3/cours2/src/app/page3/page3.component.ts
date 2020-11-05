import { Component, OnInit } from '@angular/core';
import { Hero2 } from '../hero';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  heroes: Hero2[] = [
    {
      description: "Hero 1",
      prix: 99
    },
    {
      description: "Hero 2",
      prix: 99
    },
    {
      description: "Hero 3",
      prix: 99
    },
    {
      description: "Hero 4",
      prix: 99
    },
    {
      description: "Hero 5",
      prix: 99
    },
    {
      description: "Hero 6",
      prix: 99
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
