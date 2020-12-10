import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from 'src/forfait';

@Component({
  selector: 'app-tripcard',
  templateUrl: './tripcard.component.html',
  styleUrls: ['./tripcard.component.scss']
})
export class TripcardComponent implements OnInit {

  constructor() { }

  @Input() forfait: Forfait;

  ngOnInit(): void {
  }

}
