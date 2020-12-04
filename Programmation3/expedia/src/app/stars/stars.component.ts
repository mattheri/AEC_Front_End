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
    for (let i = 5; i > 0; i--) {
      if (i - this.etoiles > 1) {
        this.etoile.push("star");
      }

      if ((i - this.etoiles) < 1 && (i - this.etoiles) > 0) {
        this.etoile.push("star half");
      }

      if ((i - this.etoiles) < 0) {
        this.etoile.push("star empty");
      }
    }
  }

}
