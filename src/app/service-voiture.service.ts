import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Voiture } from './model/voiture';

@Injectable({
  providedIn: 'root'
})
export class ServiceVoitureService {
  private apiUrl = 'http://localhost:8080/voiture'

  constructor(private http: HttpClient) { }

  private updateEvent = new Subject<void>();
  update$ = this.updateEvent.asObservable();

  triggerupdate(){
  this.updateEvent.next();
}

  //Creation
  createVoiture(voiture: any, photo2?: File, photo3?: File, photo4?: File): Observable<any> {
    const formData = new FormData();
    formData.append('voiture', JSON.stringify(voiture));
    if (photo2) formData.append('photo2', photo2);
    if (photo3) formData.append('photo3', photo3);
    if (photo4) formData.append('photo4', photo4);

    return this.http.post(`${this.apiUrl}/create`, formData);
  }

   // Appeler l'endpoint pour obtenir le nombre de voitures
   getNombreVoitures(): Observable<number> {
    const url = `${this.apiUrl}/voiture/nbr`;
    return this.http.get<number>(url);
  }

  //Liste des voitures a travers idAdminParking qui la ajouter
  listerVoiture(idAdminParking: number): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(`${this.apiUrl}/list/${idAdminParking}`);
  }

  getAllVoitures(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/read`);
  }

  getVoitureById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/read/${id}`);
  }
  deleteVoiture(idVoiture: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${idVoiture}`);
  }

  // Modification
updateVoiture(id: number, voiture: any, photo2?: File, photo3?: File, photo4?: File): Observable<any> {
    const formData = new FormData();
    formData.append('voiture', JSON.stringify(voiture));
    if (photo2) formData.append('photo2', photo2);
    if (photo3) formData.append('photo3', photo3);
    if (photo4) formData.append('photo4', photo4);

    return this.http.put(`${this.apiUrl}/update/${id}`, formData);
  }

}
