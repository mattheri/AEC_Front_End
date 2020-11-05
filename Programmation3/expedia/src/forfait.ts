import { Hotel } from './hotel';

export interface Forfait {
    destination: string;
    villeDepart: string;
    hotel: Hotel;
    dateDepart: Date;
    dateRetour: Date;
    prix: number;
}