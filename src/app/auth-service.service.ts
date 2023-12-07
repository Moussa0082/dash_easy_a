import { Injectable } from '@angular/core';
import { AdminParking } from './model/adminParking';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private admin1: AdminParking | undefined;
  public isAuth: boolean = false;

  constructor(private route: Router) {
    // Charger les données de l'administrateur depuis le localStorage au moment de l'initialisation du service
    const storedAdminId = localStorage.getItem('idAdminParking'); // Utiliser 'idAdminParking' au lieu de 'idAdmin'
    if (storedAdminId) {
      // Si un ID est stocké, vous pouvez charger les données de l'administrateur ici
      // this.admin1 = this.loadAdminData(storedAdminId);
    }
  }

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();

  triggerUpdate() {
    this.updateEvent.next();
  }

  setAdminConnecte(admin: AdminParking) {
    this.admin1 = admin;
    console.log("setAdminConnecte", this.admin1);

    // Stocker l'id de l'administrateur connecté dans le localStorage
    localStorage.setItem('AdminParking', JSON.stringify(admin)); // Utiliser 'idAdminParking' au lieu de 'idAdmin'
  }

  getAdminConnecte(): AdminParking | undefined {
    return this.admin1;
  }

  deconnecter() {
    console.log("je suis dans deconnecter");

    this.admin1 = null;
    this.isAuth = false;
    localStorage.clear();
    this.route.navigate(['/login']);
    console.log("sortie deconnecter", localStorage.getItem("idAdminParking"));
  }
}
