import { Routes } from '@angular/router';

import { LoginPageComponent } from 'app/login-page/login-page.component';
import { ParkingInactifComponent } from 'app/parking-inactif/parking-inactif.component';
import { ParkingActifComponent } from 'app/parking-actif/parking-actif.component';
import { DashboardSuperAdminComponent } from 'app/dashboard-super-admin/dashboard-super-admin.component';
import { UtilisateursComponent } from 'app/utilisateurs/utilisateurs.component';
import { ListeBankComponent } from 'app/pages/liste-bank/liste-bank.component';
import { ListeTypeBanqueComponent } from 'app/pages/liste-type-banque/liste-type-banque.component';
import { ListeAdminComponent } from 'app/pages/liste-admin/liste-admin.component';
import { ListeAgentEnableComponent } from 'app/pages/admin/liste-agent-enable/liste-agent-enable.component';
import { ListeAgentDisableComponent } from 'app/pages/admin/liste-agent-disable/liste-agent-disable.component';
import { ListeGroupeCotisationComponent } from 'app/pages/liste-groupe-cotisation/liste-groupe-cotisation.component';

export const SuperAdminRoutes: Routes = [
   
    {path: 'dashboard-super-admin', component: DashboardSuperAdminComponent},
    {path:'bank', component:ListeBankComponent},
    {path: 'type-bank', component:ListeTypeBanqueComponent},
    {path:'admins', component:ListeAdminComponent},
    {path: 'groupes-cotisation', component: ListeGroupeCotisationComponent},

     
];
