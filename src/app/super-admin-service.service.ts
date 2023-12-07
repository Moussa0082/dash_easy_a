import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperAdmin } from './model/superAdmin';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminServiceService {

  private baseUrl = 'localhost:8080/superAdmin'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  createSuperAdmin(superAdmin: SuperAdmin): Observable<SuperAdmin> {
    return this.http.post<SuperAdmin>(`${this.baseUrl}/create`, superAdmin);
  }

  getAllSuperAdmin(): Observable<SuperAdmin[]> {
    return this.http.get<SuperAdmin[]>(`${this.baseUrl}/read`);
  }

  updateSuperAdmin(superAdmin: SuperAdmin): Observable<SuperAdmin> {
    return this.http.put<SuperAdmin>(`${this.baseUrl}/update`, superAdmin);
  }
}

