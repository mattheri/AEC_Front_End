import { Hotel } from './hotel';

export interface Forfait {
  _id?: string;
  da?: string;
  destination: string;
  villeDepart: string;
  hotel: Hotel;
  dateDepart: Date | number;
  dateRetour: Date | number;
  prix: number;
  nbJours: number;
  rabais?: number;
  vedette?: boolean;
}
