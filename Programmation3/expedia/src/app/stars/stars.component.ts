import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() etoiles: number;

  etoile = [];
  constructor() { }

  ngOnInit(): void {
    let nbEtoiles = this.etoiles;
    let half = false;
    let left = 5 - this.etoiles;
    if (this.etoiles - 5 < 0) {
      nbEtoiles = this.etoiles - 0.5;
      half = true;
      left -= 0.5;
    }
    while (nbEtoiles--) {
      this.etoile.push("star");
    }

    if (half) {
      this.etoile.push("star half");
    }

    while (left--) {
      this.etoile.push("star empty");
    }
  }

}
