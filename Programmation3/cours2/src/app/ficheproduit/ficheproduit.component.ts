import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficheproduit',
  templateUrl: './ficheproduit.component.html',
  styleUrls: ['./ficheproduit.component.scss']
})
export class FicheproduitComponent implements OnInit {

  @Input() nom: string;
  @Input() description: string;
  @Input() prix: number;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
