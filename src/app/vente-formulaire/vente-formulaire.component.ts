import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientModel } from 'app/model/clientModel';
import { Voiture } from 'app/model/voiture';
import { ServiceClientService } from 'app/service-client.service';
import { ServiceVoitureService } from 'app/service-voiture.service';
import { VenteServiceService } from 'app/vente-service.service';
import {MatSort, MatSortModule} from '@angular/material/sort';


@Component({
  selector: 'app-vente-formulaire',
  templateUrl: './vente-formulaire.component.html',
  styleUrls: ['./vente-formulaire.component.scss']
})
export class VenteFormulaireComponent implements OnInit {

  venteForm!: FormGroup;
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
  constructor(private achatService: VenteServiceService  ,private fb:FormBuilder,private voitureService: ServiceVoitureService,private clientService: ServiceClientService,public dialogRef: MatDialogRef<VenteFormulaireComponent>,  @Inject(MAT_DIALOG_DATA) public data: any){
    this.venteForm= this.fb.group({
      voiture: [this.data ? this.data.voiture.marque: '', Validators.required],
      client: [this.data ? this.data.client.nom:'', Validators.required],
      dateAchat: [this.data ? this.data.dateAchat: '', Validators.required],
      prix: [this.data ? this.data.prix: '', Validators.required]
    })
  }

  onSubmit() {
    console.log("test1");
    if(this.venteForm.valid ){
      console.log("test2");
      // if(this.data){
        // console.log("test3");

    const newVente = this.venteForm.value;
    console.log(newVente);
    this.achatService.createAchat(newVente).subscribe(
      (response) => {
        console.log('Vente ajouter avec succès :', response);
        this.achatService.triggerupdate
        // Faites quelque chose avec la réponse ici
      },
      (error) => {
        console.error('Erreur lors du ajout de la vente :', error);
        // Gérer l'erreur ici
      }
    );
  }
 
}

  //Enregistrement
 
// Modification

//Fermeture du modal
onNoClick(): void {
  this.dialogRef.close();
} 

}
