import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = 'http://localhost:8080/location';

  constructor(private http: HttpClient) { }

  private updateEvent = new Subject<void>();
    update$ = this.updateEvent.asObservable();

  triggerupdate(){
    this.updateEvent.next();
  }

  createLocation(location: Location): Observable<Location> {
    return this.http.post<Location>(`${this.baseUrl}/create`, location);
  }

  getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.baseUrl}/read`);
  }
  
  //Liste des voitures a travers idAdminParking qui la ajouter
  // listerVoiture(idAdminParking: number): Observable<Location[]> {
  //   return this.http.get<Location[]>(`${this.baseUrl}/list/${idAdminParking}`);
  // }

  getLocationById(idLocation: number): Observable<Location> {
    return this.http.get<Location>(`${this.baseUrl}/read/${idLocation}`);
  }
  updateLocation(location: Location): Observable<Location> {
    return this.http.put<Location>(`${this.baseUrl}/update`, location);
  }

  deleteLocation(idLocation: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/delete/${idLocation}`);
  }
}
