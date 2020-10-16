import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero1',
  templateUrl: './hero1.component.html',
  styleUrls: ['./hero1.component.scss']
})
export class Hero1Component implements OnInit {

  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
