import { Hotel } from './hotel';

export interface Forfait {
  _id?: string;
  da?: string;
  destination: string;
  villeDepart: string;
  hotel: Hotel;
  dateDepart: Date;
  dateRetour: Date;
  prix: number;
  nbJours: number;
  rabais?: number;
}
