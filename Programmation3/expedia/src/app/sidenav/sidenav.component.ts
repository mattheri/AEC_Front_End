import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Filtre } from 'src/filtre';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  filtres: Filtre = {
    choix: [],
    dateDepart: new Date(Date.now()),
    nbEtoiles: 0,
    nbJours: 7
  };

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
  }

  ajoutFiltre(nv: Filtre) {
    console.log(this.filtres);
    this.filtres = nv;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
  }
  ngOnInit(): void {
  }

}
