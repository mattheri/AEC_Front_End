import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  hero: Hero[] = [
    {
      description: "Bla"
    },
    {
      description: "Blabla"
    },
    {
      description: "Blablabla"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
