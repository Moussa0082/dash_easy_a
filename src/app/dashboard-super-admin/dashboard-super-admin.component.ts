import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { AdminParkingServiceService } from 'app/admin-parking-service.service';
import { AdminParking } from 'app/model/adminParking';
import Swal from 'sweetalert2';
import { ServiceClientService } from 'app/service-client.service';
import { ClientModel } from 'app/model/clientModel';
@Component({
  selector: 'app-dashboard-super-admin',
  templateUrl: './dashboard-super-admin.component.html',
  styleUrls: ['./dashboard-super-admin.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class DashboardSuperAdminComponent implements OnInit{
  displayedColumns: string[] = [ 'nomPrenom', 'nomParking', 'email','adresseParking'];
  dataSource = new MatTableDataSource<AdminParking>();
  dataSource2 = new MatTableDataSource<ClientModel>();

  admin:AdminParking[]=[];
  nbrAdmin: number;
  client: ClientModel[]= [];
  nbrClt: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort ) sort!: MatSort;

  constructor(private adminParking :AdminParkingServiceService, private clientService: ServiceClientService){
    this.dataSource= new MatTableDataSource(this.admin);
    this.dataSource2 = new MatTableDataSource(this.client)
  }

  ngAfterViewInit() {  
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
      this.adminParking.getAllAdminParking().subscribe(admins=>{
      this.admin = admins.filter(admin => admin.acces=== true);
      this.dataSource = new MatTableDataSource(this.admin);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.nbrAdmin= this.admin.length
 });
       this.clientService.getAllClients().subscribe(clients =>{
        this.client = clients;
        this.dataSource2= new MatTableDataSource(this.client);
        this.nbrClt= this.client.length;
       })
     

}

chargerDonner(){
  this.adminParking.getAllAdminParking().subscribe(admins=>{
    this.admin = admins.filter(admin => admin.acces=== true);
    this.dataSource = new MatTableDataSource(this.admin);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
});
}

chargerUser(){
  this.clientService.getAllClients().subscribe(clients =>{
    // this.nbrClt= this.client.length;
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
      title: 'Êtes-vous sûr de vouloir de desactiver?',
      text: 'Il ne pourra plus acceder à la plateforme !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, desactive-le !',
      cancelButtonText: 'Non, garde-le'
      }).then((result) => {
        if (result.value) {
          this.chargerDonner();
          this.adminParking.changeAccess(idAdminParking).subscribe();
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
