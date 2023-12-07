import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon?: string;
    class?: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/adminTableau', title: 'Tableau de bord',  icon: 'fa-chart-line', class: '' },
    //   { path: '/enseignant', title: 'Enseignant',  icon:'fa-user-graduate', class: '' },
    //   { path: '/etudiant', title: 'Etudiant',  icon:'fa-users', class: '' },
    //   { path: '/admin', title: 'Admin',  icon:'fa-user-shield', class: '' },
    //   { path: '/alert-en', title: 'Alert',  icon:'fa-bell', class: '' },
    //   { path: '/abonnement', title: 'Abonnement',  icon:'fa-money', class: '' },
  
    // {path: '/bank', title:'Banques', icon:'fa fa-home', class:''},
    // {path: '/type-bank', title:'Types Banques', icon:'fa fa-list-ol'},
    {path:  '/demandes-rejete', title:'Demande reçues', icon:''},
    {path : '/demandes-en-cours', title:'Demande en cours', icon:''},
    {path : '/demandes-valide', title:'Demande validées', icon:'', class:''},
    {path : '/demandes-recu', title:'Demande rejetées', icon:''},
    {path:'/demande-annule', title:'Demande Annulées', icon:''},
    {path: '/enable-agents', title:'Agent active', icon:''},
    {path: '/disable-agents', title:'Agent desactiver' , icon:''},
]
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

   isBlankPage : boolean = false;
   isLoginPage : boolean = false;
   isInscription : boolean = false;

  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
         this.isBlankPage = event.url === '/';
         this.isLoginPage = event.url.endsWith('login-page') || event.url === '/login';
         this.isInscription = event.url.endsWith('inscription') || event.url === '/inscription';
      }
    });
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
