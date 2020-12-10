import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from 'src/forfait';

@Component({
  selector: 'app-tripdetails',
  templateUrl: './tripdetails.component.html',
  styleUrls: ['./tripdetails.component.scss']
})
export class TripdetailsComponent implements OnInit {

  constructor() { }

  @Input() forfait: Forfait;

  ngOnInit(): void {
  }

}
