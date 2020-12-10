import { Pipe, PipeTransform } from '@angular/core';
import { Filtre } from 'src/filtre';
import { Forfait } from 'src/forfait';

@Pipe({
  name: 'appliqueFiltre',
  pure: false
})
export class AppliqueFiltrePipe implements PipeTransform {

  transform(forfaits: Forfait[], filtre: Filtre): Forfait[] {
    /* Pipe is not being updated everytime filtre is updated.
    Reason it is not working is that Angular doesn't actually check the content of the object or array.
    Since I merely update filtre and doesn't change its reference, the pipe is not being updated.
    For time's sake, I implemented the pipe as an 'impure' one. NOT PERFORMANT, runs every change in the lifecycle.
    Should keep the transformation to a minimum.*/

    return forfaits
      .filter(forfait => forfait.dateDepart >= filtre.dateDepart)
      .filter(forfait => filtre.nbEtoiles ? forfait.hotel.etoiles >= filtre.nbEtoiles : forfait)
      .filter(forfait => forfait.nbJours >= filtre.nbJours)
      .filter(forfait => filtre.choix.length ? forfait.hotel.caracteristiques.find((car) => filtre.choix.find(choix => car === choix.val)) : forfait);
  }
}
