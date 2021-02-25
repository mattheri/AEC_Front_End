import { Component, Input, OnInit } from '@angular/core';
import { Filtre } from 'src/filtre';
import { Forfait } from 'src/forfait';
import { ForfaitsService } from '../forfaits.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  constructor(
    private forfaitsService: ForfaitsService,
    private route: ActivatedRoute
  ) {}
  forfaitsDispo: Forfait[];

  @Input() filtre: Filtre;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['destination']) {
        return this.getForfaits(params['destination']);
      } else {
        this.getForfaits();
      }
    });
  }

  getForfaits(param?: string) {
    this.forfaitsService.getForfaits().subscribe((result) => {
      if (param) {
        return (this.forfaitsDispo = result.filter(
          (forfaits) => forfaits.destination.toLowerCase() === param
        ));
      }

      return (this.forfaitsDispo = result);
    });
  }
}
