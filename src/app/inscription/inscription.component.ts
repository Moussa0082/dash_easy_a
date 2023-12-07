import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminParkingServiceService } from 'app/admin-parking-service.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {

  adminForm!:FormGroup;
  agrementParking!: File;
  constructor(private fb:FormBuilder,private adminService: AdminParkingServiceService){
    this.adminForm= this.fb.group({
      nomPrenom:['', Validators.required],
      email:['', Validators.required],
      motdepasse:['', Validators.required],
      nomParking:['', Validators.required],
      agrementParking:['', Validators.required],
      adresseParking:['', Validators.required],
    })
  }
  ImageChange(event: any) {
    this.agrementParking = event.target.files[0];
    console.log(this.agrementParking);
  }

  onSubmit() {
    console.log("test1");
    if(this.adminForm.valid ){
      console.log("test2");
      // if(this.data){
        // console.log("test3");

    const newAdminParking= this.adminForm.value;
    console.log(newAdminParking);
    this.adminService.createAdminParking(newAdminParking,this.agrementParking).subscribe(
      (response) => {
        console.log('AdminParking inscrit avec succès :', response);
        // Faites quelque chose avec la réponse ici
      },
      (error) => {
        console.error('Erreur lors de la l inscription de l Admin :', error);
        // Gérer l'erreur ici
      }
    );
  }
 
}

 

}
