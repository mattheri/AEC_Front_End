import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit {
  @Input() etoiles: number;

  etoile = [];
  constructor() {}

  ngOnInit(): void {
    if (this.etoiles) {
      for (let i = 0; i < this.etoiles; i++) {
        if (i + 0.5 === +this.etoiles) {
          this.etoile.push('star half');
          break;
        }
        this.etoile.push('star');
      }
      for (let i = 4; i > +this.etoiles; i--) {
        this.etoile.push('star empty');
      }
      if (this.etoiles === 4) {
        this.etoile.push('star empty');
      }
    }
  }
}
