import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { SuperAdminRoutes } from './super-layout.routing';
import { ParkingActifComponent } from 'app/parking-actif/parking-actif.component';
import { ParkingInactifComponent } from 'app/parking-inactif/parking-inactif.component';
import { UtilisateursComponent } from 'app/utilisateurs/utilisateurs.component';
import { DashboardSuperAdminComponent } from 'app/dashboard-super-admin/dashboard-super-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SuperAdminRoutes),
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
    NotificationsComponent, 
  ]
})

export class SuperLayoutModule {}
