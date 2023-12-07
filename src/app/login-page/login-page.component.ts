import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminParkingServiceService } from 'app/admin-parking-service.service';
import { AuthServiceService } from 'app/auth-service.service';
import { CoreServiceService } from 'app/core-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthentificationService } from 'app/service/authentification.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  loginForm!: FormGroup;
  // admin:any;


  constructor(private authService: AuthentificationService, private router: Router, private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      motDePasse: ['', Validators.required],
      userType: ['', Validators.required],
    });
  }

  ngOnInit() {
  
  }

  // onSubmit() {
  //   // console.log("oui")
  //   // console.log(this.loginForm.value)
  //   const  { email, motDePasse, userType } = this.loginForm.value;
  //   if (this.loginForm.valid) {
  //     this.authService.login(email, motDePasse, userType).subscribe(
  //       (response: any) => {
  //         // Gérer la connexion réussie ici
  //         console.log(response.data);
  //         this.router.navigate(['/tableaudebord']);
  //         Swal.fire('Succès !...',  'Connexion réussi avec succes', 'success');
  //         this.loginForm.reset();
  //       },
  //       (error: any) => {
  //         // this.snack.openSnackBar("Mot de passe ou nom incorrect");
  //         console.error("erreur", error);
  //         Swal.fire({
  //                     icon: 'error',
  //                     title: 'Oops...',
  //                     text: error.error.message,
  //                }
  //         )
  //       }
  //     );
  //   }
  // }
  // login.component.ts
  // login.component.ts

//  onSubmit() {
//   const { email, motDePasse , userType} = this.loginForm.value;

//   if (this.loginForm.valid) {
//     this.authService.login(email, motDePasse , userType).subscribe(
//       (response: any) => {
//         // Gérer la connexion réussie ici
//         console.log(response, userType);
//       // Stocker les informations de l'utilisateur dans localStorage
//       localStorage.setItem('userData', JSON.stringify({
       
//         userData: response,  userType, // Assurez-vous que la structure de votre réponse est correcte
//       }));

//       console.log("userType", localStorage.getItem('userData'));
        
//         // Rediriger vers le tableau de bord
//         this.router.navigate(['/tableaudebord']);

//         Swal.fire('Succès !...',  'Connexion réussie avec succès', 'success');
//         this.loginForm.reset();
//       },
//       (error: any) => {
//         console.error("Erreur lors de la connexion :", error);
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: error.error.message,
//         });
//       }
//     );
//   }
// }


  onSubmit() {
  const { email, motDePasse, userType } = this.loginForm.value;
  if (this.loginForm.valid) {
    this.authService.login(email, motDePasse, userType).subscribe(
      (userData: any) => {
        console.log('Utilisateur connecté :', userData);
        // localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('userData', JSON.stringify({
       
                  userData: userData,  userType, // Assurez-vous que la structure de votre réponse est correcte
                }));
                      console.log("userType", localStorage.getItem('userData'));

        
        // Gérer les informations de l'utilisateur en fonction du type
          if (userType === 'Admin') {
            // Opérations spécifiques pour un administrateur
            console.log('C\'est un administrateur');
          } else if (userType === 'SuperAdmin') {
            // Opérations spécifiques pour un super administrateur
            console.log('C\'est un super administrateur');
          } else if (userType === 'Agent') {
            // Opérations spécifiques pour un agent
            console.log('C\'est un agent');
          } else {
            console.log('Type d\'utilisateur non pris en charge');
          }
          this.router.navigate(this.redirectUser(userType));

        // Redirection en fonction du type d'utilisateur
         // Redirection en fonction du type d'utilisateur

        Swal.fire('Succès !...', 'Connexion réussie avec succès', 'success');
        this.loginForm.reset();
      },
      (error: any) => {
        console.error('Erreur lors de la connexion :', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message,
        });
      }
    );
  }
}

// Méthode pour rediriger en fonction du type d'utilisateur
redirectUser(userType: string): any {
  switch (userType) {
    case 'Admin':
      this.router.navigate(['/dashboard']);
      break;
    case 'SuperAdmin':
      this.router.navigate(['/super-admin']);
      break;
    case 'Agent':
      this.router.navigate(['/dashboard']);
      break;
    default:
      console.log('Type d\'utilisateur non pris en charge pour la redirection');
  }
}



}
