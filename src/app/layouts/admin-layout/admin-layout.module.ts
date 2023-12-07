import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../voiture/typography.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { VoitureFormulaireComponent } from 'app/voiture-formulaire/voiture-formulaire.component';
import { LocationFormulaireComponent } from 'app/location-formulaire/location-formulaire.component';
import { VenteFormulaireComponent } from 'app/vente-formulaire/vente-formulaire.component';
import { MaintenanceFormulaireComponent } from 'app/maintenance-formulaire/maintenance-formulaire.component';
import { LoginPageComponent } from 'app/login-page/login-page.component';
import { InscriptionComponent } from 'app/inscription/inscription.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    UserProfileComponent,
    TypographyComponent,
    VoitureFormulaireComponent,
    LocationFormulaireComponent,
    VenteFormulaireComponent,
    MaintenanceFormulaireComponent,
    LoginPageComponent,
    InscriptionComponent
  ]
})

export class AdminLayoutModule {}
