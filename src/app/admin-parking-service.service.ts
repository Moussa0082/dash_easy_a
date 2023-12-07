import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminParking } from './model/adminParking';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminParkingServiceService {
  private baseUrl = 'http://localhost:8080/adminParking';


  constructor(private http: HttpClient) {}

  private updateEvent = new Subject<void>();
    update$ = this.updateEvent.asObservable();

  triggerupdate(){
    this.updateEvent.next();
  }

  createAdminParking(adminParking: AdminParking, agrementParking: File): Observable<AdminParking> {
    const formData: FormData = new FormData();
    formData.append('adminParking', JSON.stringify(adminParking));
    if (agrementParking) {
      formData.append('agrement', agrementParking, agrementParking.name);
    }

    return this.http.post<AdminParking>(`${this.baseUrl}/create`, formData);
  }

  getAllAdminParking(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/read`);
  }

  getAdminParkingById(id: number): Observable<AdminParking> {
    return this.http.get<AdminParking>(`${this.baseUrl}/read/${id}`);
  }

deleteAdminParking(id: number): Observable<string> {
  return this.http.delete<string>(`${this.baseUrl}/delete/${id}`);
}

loginAdmin(email: string, motdepasse: string): Observable<any> {
  const body = {
    email: email,
    motdepasse: motdepasse,
  };

  return this.http.get(`${this.baseUrl}/login?email=${email}&motdepasse=${motdepasse}`);
}
 // Méthode pour changer l'accès d'un enseignant
 changeAccess(idAdminParking: number) {
  return this.http.put(`${this.baseUrl}/changeAccess/${idAdminParking}`, {});
}

}