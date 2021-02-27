import { Component, Input, OnInit } from '@angular/core';
import { Filtre } from 'src/filtre';
import { Forfait } from 'src/forfait';
import { ForfaitsService } from '../forfaits.service';
import { ActivatedRoute } from '@angular/router';
import { FiltreService } from '../filtre.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  constructor(
    private forfaitsService: ForfaitsService,
    private route: ActivatedRoute,
    private currentfiltre: FiltreService
  ) {}
  forfaitsDispo: Forfait[];

  filtres: Filtre;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['destination']) {
        return this.getForfaits(params['destination']);
      } else {
        this.getForfaits();
      }
    });

    this.currentfiltre.current.subscribe((nv) => (this.filtres = nv));
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
