import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.scss']
})
export class Hero2Component implements OnInit {

  @Input() description: string;
  @Input() prix: number;

  constructor() { }

  ngOnInit(): void {
  }

}
