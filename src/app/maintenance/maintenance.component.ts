import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MaintenanceFormulaireComponent } from 'app/maintenance-formulaire/maintenance-formulaire.component';
import {Maintenance} from 'app/model/maintenance';
import { MatSort } from '@angular/material/sort';
import { MaintenanceService } from 'app/maintenance.service';
import Swal from 'sweetalert2';
import { AdminParking } from 'app/model/adminParking';
import { AuthServiceService } from 'app/auth-service.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class MaintenanceComponent implements OnInit{
  displayedColumns: string[] = ['idMaintenance', 'voiture', 'prix', 'date', 'description', 'action'];
  dataSource = new MatTableDataSource<Maintenance>();
  maintenances: Maintenance[]= [];
  adminParking: AdminParking | any;

  @ViewChild(MatSort ) sort!: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialogRef: MatDialog, private mainteService: MaintenanceService, private authService: AuthServiceService) {
    this.adminParking = JSON.parse(localStorage.getItem('idAdminParking')!);
    console.log("Admin recuperer ", this.adminParking);
    
    this.chargerMaintenance();
    this.dataSource = new MatTableDataSource(this.maintenances);
  }
  ngOnInit(): void {
     this.mainteService.update$.subscribe(() =>{
      this.chargerMaintenance();
     });
     this.authService.update$.subscribe(() =>{
      this.adminParking= JSON.parse(localStorage.getItem('idAdminParking')!);
    });
  }
  chargerMaintenance(){
    this.mainteService.getAllMaintenances().subscribe(maintenance => {
      // maintenance.filter((data)=> data.voiture.adminParking.idAdminParking == this.ad)
      const data = this.maintenances.filter((data)=> data.voiture.adminParking.idAdminParking == this.adminParking)

      this.maintenances = maintenance;
      this.dataSource = new MatTableDataSource(this.maintenances);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

    openDialog() {
      const dialog = this.dialogRef.open(MaintenanceFormulaireComponent, {
        width: '400px',
      })
   }
 
   delete(idMaintenance:number){
    Swal.fire({
      title: 'Etes vous sûr ?',
      text: "Voulez - vous supprimer!!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText:'Annuler',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, je veux supprimer!',
    }).then((result) => {
      if (result.value) {
        this.mainteService.deleteMaintenance(idMaintenance).subscribe(
      (result) => {
        console.log(result);
        this.mainteService.triggerupdate();
      }
          );
          console.log("idLocation ", idMaintenance);
          this.mainteService.triggerupdate();
        this.chargerMaintenance();
        Swal.fire(
          'Supprimer!',
          'Suppression avec succès.',
          'success'
          )
        }
      else{
        Swal.fire(
          'Suppression annulée!',
          'Cette suppresion a été annulée.',
          'error'
        )
      }
    });
    // this.chargerData();
  
  }
}
