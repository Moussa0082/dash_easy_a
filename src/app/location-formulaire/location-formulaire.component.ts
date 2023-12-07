import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FormBuilder, FormGroup, FormsModule, NgForm, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ClientModel } from 'app/model/clientModel';
import { LocationService } from 'app/location.service';
import { ServiceVoitureService } from 'app/service-voiture.service';
import { ServiceClientService } from 'app/service-client.service';
interface Voiture {
  value: number;
  viewValue: string;
};
interface Client{
  value: number;
  viewValue: string;

}
@Component({
  selector: 'app-location-formulaire',
  templateUrl: './location-formulaire.component.html',
  styleUrls: ['./location-formulaire.component.scss']
})
export class LocationFormulaireComponent {

  
  locationForm!: FormGroup;
  voitureSelect: Voiture |any;
  clientSelect: ClientModel |any;
  
  ngOnInit(): void {
    this.voitureService.getAllVoitures().subscribe(res => {
     this.voitureSelect = res;
     console.log("voiture",this.voitureSelect);
    }) ;
    this.clientService.getAllClients().subscribe(res => {
      this.clientSelect = res;
      console.log("client", this.clientSelect);
    })
  }
  constructor(private locationService: LocationService   ,private fb:FormBuilder,private voitureService: ServiceVoitureService,private clientService: ServiceClientService,public dialogRef: MatDialogRef<LocationFormulaireComponent>,  @Inject(MAT_DIALOG_DATA) public data: any){
    this.locationForm= this.fb.group({
      voiture: [this.data ? this.data.voiture.marque: '', Validators.required],
      client: [this.data ? this.data.client.nom:'', Validators.required],
      dateLocation: [this.data ? this.data.dateLocation: '', Validators.required],
      prix: [this.data ? this.data.prix: '', Validators.required],
      duree: [this.data ? this.data.duree: '', Validators.required]
    })
  }

  onSubmit() {
    console.log("test1");
    if(this.locationForm.valid ){
      console.log("test2");
      // if(this.data){
        // console.log("test3");

    const newVente = this.locationForm.value;
    console.log(newVente);
    this.locationService.createLocation(newVente).subscribe(
      (response) => {
        console.log('Vente ajouter avec succès :', response);
        this.locationService.triggerupdate();
        // Faites quelque chose avec la réponse ici
      },
      (error) => {
        console.error('Erreur lors du ajout de la vente :', error);
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
