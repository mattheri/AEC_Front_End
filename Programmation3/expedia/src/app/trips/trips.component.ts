import { Component, OnInit } from '@angular/core';
import { forfaits } from "../../mock";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  constructor() { }
  forfaitsDispo = forfaits;

  ngOnInit(): void {
  }

}
