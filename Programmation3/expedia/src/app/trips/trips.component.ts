import { Component, Input, OnInit } from '@angular/core';
import { Filtre } from 'src/filtre';
import { Forfait } from 'src/forfait';
import { ForfaitsService } from '../forfaits.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
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
  constructor(private forfaitsService: ForfaitsService) {}
  forfaitsDispo: Forfait[];

  @Input() filtre: Filtre;

  ngOnInit() {
    this.getForfaits();
  }

  getForfaits() {
    this.forfaitsService
      .getForfaits()
      .subscribe((result) => (this.forfaitsDispo = result));
  }
}
