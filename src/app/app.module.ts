import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatTableModule} from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { VenteComponent } from './vente/vente.component';
import { VenteFormulaireComponent } from './vente-formulaire/vente-formulaire.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceFormulaireComponent } from './maintenance-formulaire/maintenance-formulaire.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SuperAdminComponent } from './super-layout/super-admin/super-admin.component';
import { DashboardSuperAdminComponent } from './dashboard-super-admin/dashboard-super-admin.component';
import { ParkingActifComponent } from './parking-actif/parking-actif.component';
import { ParkingInactifComponent } from './parking-inactif/parking-inactif.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationService } from './location.service';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeBankComponent } from './pages/liste-bank/liste-bank.component';
import { ListeTypeBanqueComponent } from './pages/liste-type-banque/liste-type-banque.component';
import { ListeGroupeCotisationComponent } from './pages/liste-groupe-cotisation/liste-groupe-cotisation.component';
import { ListeDemandeRejeteComponent } from './pages/agent/liste-demande-rejete/liste-demande-rejete.component';
import { ListeDemandeEnCoursComponent } from './pages/agent/liste-demande-en-cours/liste-demande-en-cours.component';
import { ListeAgentDisableComponent } from './pages/admin/liste-agent-disable/liste-agent-disable.component';
import { ListeAgentEnableComponent } from './pages/admin/liste-agent-enable/liste-agent-enable.component';
import { ListeAdminComponent } from './pages/liste-admin/liste-admin.component';
import { ListeDemandeRecuComponent } from './pages/agent/pages/agent/liste-demande-recu/liste-demande-recu.component';
import { DetailDemandeComponent } from './pages/agent/detail-demande/detail-demande.component';
import { ListeDemandeAnnuleComponent } from './pages/agent/liste-demande-annule/liste-demande-annule.component';
import { ModifierBanqueComponent } from './pages/modifier-banque/modifier-banque.component';
import { ModifierTypeBanqueComponent } from './pages/modifier-type-banque/modifier-type-banque.component';
import { AjouteAdminComponent } from './pages/ajoute-admin/ajoute-admin.component';
import { AjouterAgentComponent } from './pages/ajouter-agent/ajouter-agent.component';
import { AjouterTypeBanqueComponent } from './pages/ajouter-type-banque/ajouter-type-banque.component';
import { AjouterBanqueComponent } from './pages/ajouter-banque/ajouter-banque.component';
import { ListeDemandeValideComponent } from './pages/agent/liste-demande-valide/liste-demande-valide.component.js';
import { AssignAgentComponent } from './pages/admin/assign-agent/assign-agent.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatPaginatorModule,
    AppRoutingModule, 
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  declarations: [
    
    AppComponent,
    AdminLayoutComponent,
    SuperAdminComponent,
    ListeBankComponent,
    ListeTypeBanqueComponent,
    ListeGroupeCotisationComponent,
    ListeDemandeRejeteComponent,
    ListeDemandeEnCoursComponent,
    ListeAgentDisableComponent,
    ListeAgentEnableComponent,
    ListeAdminComponent,
    ListeDemandeValideComponent,
    ListeDemandeRecuComponent,
    DetailDemandeComponent,
    ListeDemandeAnnuleComponent,
    ModifierBanqueComponent,
    ModifierTypeBanqueComponent,
    AjouteAdminComponent,
    AjouterAgentComponent,
    AjouterTypeBanqueComponent,
    AjouterBanqueComponent,
    AssignAgentComponent,
   
    
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
