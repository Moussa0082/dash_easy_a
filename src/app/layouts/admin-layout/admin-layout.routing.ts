import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../voiture/typography.component';
import { LocationVoitureComponent } from 'app/location-voiture/location-voiture.component';
import { VenteComponent } from 'app/vente/vente.component';
import { MaintenanceComponent } from 'app/maintenance/maintenance.component';
import { LoginPageComponent } from 'app/login-page/login-page.component';
import { AuthGardeService } from 'app/auth-garde.service';
import { Component } from '@angular/core';
import { InscriptionComponent } from 'app/inscription/inscription.component';
import { DetailDemandeComponent } from 'app/pages/agent/detail-demande/detail-demande.component';
import { ListeDemandeRecuComponent } from 'app/pages/agent/liste-demande-recu/liste-demande-recu.component';
import { ListeDemandeValideComponent } from 'app/pages/agent/liste-demande-valide/liste-demande-valide.component';
import { ListeDemandeEnCoursComponent } from 'app/pages/agent/liste-demande-en-cours/liste-demande-en-cours.component';
import { ListeDemandeRejeteComponent } from 'app/pages/agent/liste-demande-rejete/liste-demande-rejete.component';
import { ListeAgentEnableComponent } from '../../pages/admin/liste-agent-enable/liste-agent-enable.component';
import { ListeAgentDisableComponent } from 'app/pages/admin/liste-agent-disable/liste-agent-disable.component';
import { ListeGroupeCotisationComponent } from '../../pages/liste-groupe-cotisation/liste-groupe-cotisation.component';
import { ListeBankComponent } from '../../pages/liste-bank/liste-bank.component';
import { ListeTypeBanqueComponent } from 'app/pages/liste-type-banque/liste-type-banque.component';
import { ListeDemandeAnnuleComponent } from 'app/pages/agent/liste-demande-annule/liste-demande-annule.component';
import { ListeAdminComponent } from 'app/pages/liste-admin/liste-admin.component';

export const AdminLayoutRoutes: Routes = [
   
    // canActivate, [AuthGardeService], 
    { path: 'login',      component: LoginPageComponent },
    { path: 'dashboard',   component: DashboardComponent },
    // {path:'adminTableau', component:AdminTableauComponent},
    // {path:'agentTableau', component:AgentTableauComponent},
    // { path: 'profile',canActivate : [AuthGuardService],    component: ProfileComponent },
    // { path: 'enseignant',canActivate : [AuthGuardService],       component: EnseignantComponent },
    // { path: 'etudiant',canActivate : [AuthGuardService],      component: EtudiantComponent },
    // { path: 'admin',canActivate : [AuthGuardService],      component: AdministrateurComponent },
    // { path: 'alert-en', canActivate : [AuthGuardService],          component: AlertEnseignantComponent },
    // { path: 'abonnement', canActivate : [AuthGuardService],          component: AbonnementComponent },
    // { path: 'detail-niveau/:id',canActivate : [AuthGuardService],           component: DetailNiveauComponent },
    // { path: 'detail-filiere/:id',  canActivate : [AuthGuardService],         component: DetailFiliereComponent },
    

    { path: 'detail-demande/:id', component: DetailDemandeComponent },
    // { path: 'tableaudebord',      component: TableauDeBordComponent },
    {path : 'demandes-recu', component : ListeDemandeRecuComponent},
    {path : 'demandes-valide', component : ListeDemandeValideComponent},
    {path : 'demandes-en-cours', component : ListeDemandeEnCoursComponent},
    {path:  'demandes-rejete', component:ListeDemandeRejeteComponent},
    {path: 'enable-agents', component:ListeAgentEnableComponent},
    {path: 'disable-agents', component:ListeAgentDisableComponent},
    {path: 'groupes-cotisation', component: ListeGroupeCotisationComponent},
    {path: 'detail-ask', component:DetailDemandeComponent},
//    {path:'bank', component:ListeBankComponent},
//    {path: 'type-bank', component:ListeTypeBanqueComponent},
   {path: 'demande-annule', component:ListeDemandeAnnuleComponent},
//    {path:'admins', component:ListeAdminComponent},



];
