import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Maintenance } from './model/maintenance';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
    private apiUrl = 'http://localhost:8080/maintenance'; // Remplacez cela par votre URL
  
    constructor(private http: HttpClient) {}

    private updateEvent = new Subject<void>();
    update$ = this.updateEvent.asObservable();

  triggerupdate(){
    this.updateEvent.next();
  }
  
    createMaintenance(maintenance: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/create`, maintenance);
    }

    //Liste des voitures a travers idAdminParking qui la ajouter
    // listerVoiture(idAdminParking: number): Observable<Maintenance[]> {
    //   return this.http.get<Maintenance[]>(`${this.apiUrl}/list/${idAdminParking}`);
    // }
  
  
    getAllMaintenances(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/read`);
    }
  
    getMaintenanceById(idMaintenance: number): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/read/${idMaintenance}`);
    }
    updateMaintenance(maintenance: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/update`, maintenance);
    }
  
    deleteMaintenance(idMaintenance: number): Observable<string> {
      return this.http.delete<string>(`${this.apiUrl}/delete/${idMaintenance}`);
    }
}
