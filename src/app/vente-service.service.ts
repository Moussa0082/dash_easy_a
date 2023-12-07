import { Injectable } from '@angular/core';
import { Achat } from './model/achat';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenteServiceService {

  private apiUrl = 'http://localhost:8080/achat';

  constructor(private http: HttpClient) {}

  private updateEvent = new Subject<void>();
  update$ = this.updateEvent.asObservable();

triggerupdate(){
  this.updateEvent.next();
}

  createAchat(achat: Achat): Observable<Achat> {
    return this.http.post<Achat>(`${this.apiUrl}/create`, achat);
  }
  
  //Liste des ventes enregistrer par AdminParking 
  // listerVoiture(idAdminParking: number): Observable<Achat[]> {
  //   return this.http.get<Achat[]>(`${this.apiUrl}/list/${idAdminParking}`);
  // }

  getAllAchats(): Observable<Achat[]> {
    return this.http.get<Achat[]>(`${this.apiUrl}/read`);
  }

  getAchatById(idAchat: number): Observable<Achat> {
    return this.http.get<Achat>(`${this.apiUrl}/read/${idAchat}`);
  }
  updateAchat(achat: Achat): Observable<Achat> {
    return this.http.put<Achat>(`${this.apiUrl}/update`, achat);
  }

  deleteAchat(idAchat: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${idAchat}`);
  }
}
