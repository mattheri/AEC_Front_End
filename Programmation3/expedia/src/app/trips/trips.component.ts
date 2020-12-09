import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Filtre } from 'src/filtre';
import { forfaits } from "../../mock";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
// export class TripsComponent implements OnChanges {

//   constructor() { }
//   forfaitsDispo = forfaits;

//   @Input() filtre: Filtre;
//   changeDetected: boolean = false;
//   changelog: Filtre[];
//   oldValue: Partial<Filtre> = {};

//   ngOnChanges(changes: SimpleChanges) {
//     for (const i in changes) {
//       console.log(changes[i].currentValue);
//     }
//   }

// }
export class TripsComponent implements OnInit {

  constructor() { }
  forfaitsDispo = forfaits;

  @Input() filtre: Filtre;
  updated: Date = new Date(Date.now());
  
  updateOnFiltreChange() {
    const oldValue: Filtre = this.filtre;
    Object.entries(oldValue).map(([key, value]) => {
      if (this.filtre[key] !== value) {
        return new Date(Date.now());
      }
    })
  }

  ngOnInit() {
    console.log(this.filtre)
  }

}
