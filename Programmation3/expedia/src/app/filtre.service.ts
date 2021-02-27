import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filtre } from '../filtre';

@Injectable({
  providedIn: 'root',
})
export class FiltreService {
  filtre: Filtre = {
    choix: [],
    dateDepart: 1,
    nbEtoiles: 0,
    nbJours: 0,
  };
  private source = new BehaviorSubject(this.filtre);
  current = this.source.asObservable();
  constructor() {}

  change(filtre: Filtre) {
    this.source.next(filtre);
  }
}
