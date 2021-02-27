import { Option } from './options';

export interface Filtre {
  dateDepart: Date | number;
  choix: Option[];
  nbEtoiles: number;
  nbJours: number;
}
