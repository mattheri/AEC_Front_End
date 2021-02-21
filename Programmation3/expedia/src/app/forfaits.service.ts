import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from '../forfait';
import { Observable } from 'rxjs';
/*
  Rappel pour consulter les forfaits
  https://forfaits-voyages.herokuapp.com/api/forfaits (tous les forfaits)
  https://forfaits-voyages.herokuapp.com/api/forfaits/da/votreda 
  (tous les forfaits que vous pouvez modifier)
  Exemple : https://forfaits-voyages.herokuapp.com/api/forfaits/da/1996386
  Pour ajouter un forfait: 
  https://forfaits-voyages.herokuapp.com/api/forfaits 
  Passer un objet forfait dans le body en JSON (POST)
  Pour modifier un forfait: 
  https://forfaits-voyages.herokuapp.com/api/forfaits/idDuForfait
  Passer un objet forfait dans le body en JSON (PUT)
  Pour supprimer un forfait: 
  https://forfaits-voyages.herokuapp.com/api/forfaits/idDuForfait
 */

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ForfaitsService {
  forfaitURL: string = 'https://forfaits-voyages.herokuapp.com/api/forfaits';

  constructor(private http: HttpClient) {}

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(`${this.forfaitURL}/da/1996386`);
  }
  addForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.forfaitURL, forfait, httpOptions);
  }
  updateForfait(forfait: Forfait, forfaitid?: string): Observable<Forfait> {
    const id = forfaitid || forfait._id;

    if (!id) {
      return;
    }

    return this.http.put<Forfait>(
      `${this.forfaitURL}/${id}`,
      forfait,
      httpOptions
    );
  }
  deleteForfait(id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(`${this.forfaitURL}/${id}`, httpOptions);
  }
}
