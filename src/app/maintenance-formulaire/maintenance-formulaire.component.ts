import { Component,OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import { Voiture } from 'app/model/voiture';
import { ServiceVoitureService } from 'app/service-voiture.service';
import { MaintenanceService } from 'app/maintenance.service';
import { AdminParking } from 'app/model/adminParking';
import { AuthServiceService } from 'app/auth-service.service';

@Component({
  selector: 'app-maintenance-formulaire',
  templateUrl: './maintenance-formulaire.component.html',
  styleUrls: ['./maintenance-formulaire.component.scss'],
})
export class MaintenanceFormulaireComponent implements OnInit{
  
  maintenanceForm!: FormGroup;
  voitureSelect: Voiture |any;

  ngOnInit(): void {
    this.voitureService.getAllVoitures().subscribe(res => {
     this.voitureSelect = res;
     console.log("voiture",this.voitureSelect);
    }) ;
    
  }

  constructor(private authService: AuthServiceService  ,public dialogRef:MatDialogRef<MaintenanceFormulaireComponent>,private mainteService: MaintenanceService ,
    private fb:FormBuilder,private voitureService: ServiceVoitureService,  @Inject(MAT_DIALOG_DATA) public data: any){
     
      this.maintenanceForm = this.fb.group({
        voiture: [this.data ? this.data.voiture.marque: '', Validators.required],
        date: [this.data ? this.data.date: '', Validators.required],
        prix: [this.data ? this.data.prix: '', Validators.required],
        description: [this.data ? this.data.description: '', Validators.required],
      })
    }

    onSubmit() {
      console.log("test1");
      if(this.maintenanceForm.valid ){
        console.log("test2");
        // if(this.data){
          // console.log("test3");
  
      const newMaintenance = this.maintenanceForm.value;
      console.log(newMaintenance);
      this.mainteService.createMaintenance(newMaintenance).subscribe(
        (response) => {
          console.log('Maintenance ajouter avec succès :', response);
          this.mainteService.triggerupdate();
          // Faites quelque chose avec la réponse ici
        },
        (error) => {
          console.error('Erreur lors du ajout de la maintenance :', error);
          // Gérer l'erreur ici
        }
      );
    }
   
  }
//Fermeture du modal
onNoClick(): void {
  this.dialogRef.close();
} 

}
