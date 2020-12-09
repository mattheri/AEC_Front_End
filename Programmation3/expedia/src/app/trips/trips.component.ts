import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Filtre } from 'src/filtre';
import { forfaits } from "../../mock";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnChanges {

  constructor() { }
  forfaitsDispo = forfaits;

  @Input() filtre: Filtre;
  changeDetected: boolean = false;
  changelog: Filtre[];
  oldValue: Partial<Filtre> = {};

  ngOnChanges(changes: SimpleChanges) {
    for (const i in changes) {
      console.log(changes[i].currentValue);
    }
  }

}
// export class TripsComponent implements DoCheck {

//   constructor() { }
//   forfaitsDispo = forfaits;

//   @Input() filtre: Filtre;
//   changeDetected: boolean = false;
//   changelog: Filtre[];
//   oldValue: Partial<Filtre> = {};

//   ngDoCheck() {
//     console.log(this.filtre);
//     Object.entries(this.filtre).map(([key, value]) => {
//       console.log(key, value);
//       if (!Object.keys(this.oldValue).length) {
//         this.oldValue = this.filtre;
//       }
//       if (this.oldValue[key] !== value) {
//         this.changeDetected = true;
//         this.changelog.push(this.filtre);
//         this.oldValue = this.filtre;
//       }
//     })
//   }

// }
