import { Pipe, PipeTransform } from '@angular/core';
import { Filtre } from 'src/filtre';
import { Forfait } from 'src/forfait';

@Pipe({
  name: 'appliqueFiltre'
})
export class AppliqueFiltrePipe implements PipeTransform {

  transform(forfaits: Forfait[], filtre: Filtre): Forfait[] {
    console.log(filtre);
    return forfaits
      .filter(forfait => forfait.dateDepart >= filtre.dateDepart)
      .filter(forfait => filtre.nbEtoiles ? forfait.hotel.etoiles >= filtre.nbEtoiles : forfait)
      .filter(forfait => ((forfait.dateRetour.valueOf() - forfait.dateDepart.valueOf()) / (1000 * 3600 * 24)) >= filtre.nbJours)
      .filter(forfait => filtre.choix.length ? forfait.hotel.caracteristiques.some((car) => filtre.choix.some(choix => car === choix.val)) : forfait);
  }
}
