import { Option } from "./options";

export interface Filtre {
    dateDepart: Date;
    choix: Option[];
    nbEtoiles: number;
    nbJours: number;
}