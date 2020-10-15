import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss']
})
export class ListeProduitComponent implements OnInit {

  listeProduits: Produit[] = [
    {
      id: "1",
      nom: "Beartastic",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod, impedit animi qui sint at enim deserunt, odio dolores temporibus quae minus sit quos aperiam dolorem nisi aliquid officia voluptas!",
      prix: 48.99,
      image: "https://i.cbc.ca/1.5612956.1592258202!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/grizzly-399-and-her-four-cubs.jpg"
    },
    {
      id: "2",
      nom: "Wolftastic",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod, impedit animi qui sint at enim deserunt, odio dolores temporibus quae minus sit quos aperiam dolorem nisi aliquid officia voluptas!",
      prix: 29.99,
      image: "https://www.sciencenews.org/wp-content/uploads/2020/02/021220_jb_wolves_feat_REV-1028x579.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
