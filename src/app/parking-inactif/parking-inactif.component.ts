import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import { AdminParking } from 'app/model/adminParking';
import { MatSort } from '@angular/material/sort';
import { AdminParkingServiceService } from 'app/admin-parking-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-parking-inactif',
  templateUrl: './parking-inactif.component.html',
  styleUrls: ['./parking-inactif.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule],
})
export class ParkingInactifComponent {
  displayedColumns: string[] = ['nomPrenom', 'nomParking', 'email','adresseParking','agrement','action'];
  dataSource = new MatTableDataSource<AdminParking>();
  admin:AdminParking[]=[];
  nbrInactif: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort ) sort!: MatSort;

  constructor(private adminParking :AdminParkingServiceService){
    this.dataSource= new MatTableDataSource(this.admin);
    this.chargerDonner();
  }

  ngAfterViewInit() {  
    this.dataSource.paginator = this.paginator;
  }

  chargerDonner(){
    this.adminParking.getAllAdminParking().subscribe(admins=>{
      this.admin = admins.filter(admin => admin.acces=== false);
      this.dataSource = new MatTableDataSource(this.admin);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.nbrInactif = this.admin.length
  });
  }
  ngOnInit(): void {
   this.adminParking.update$.subscribe(() =>{
    this.chargerDonner();
   })
}


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}


  onDesActivate(idAdminParking: number){
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir activer ce Parking?',
      text: 'Il pourra maintenant acceder à la plateforme !',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Oui, active-le !',
      cancelButtonText: 'Non, ne pas lui activer'
      }).then((result) => {
        if (result.value) {
          this.chargerDonner();
          this.adminParking.changeAccess(idAdminParking).subscribe();
          this.adminParking.triggerupdate();
          this.chargerDonner();
          Swal.fire(
            'Desactivation!',
            'Cet enseignant a été desactiver.',
            'success'
          )
          this.chargerDonner();
        }  else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Annuler',
            'Votre admin est en sécurité ',
            'error'
          )
        }
      })
}
}

