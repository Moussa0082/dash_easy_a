import * as Chartist from 'chartist';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { LocationFormulaireComponent } from 'app/location-formulaire/location-formulaire.component';
import { MatSort } from '@angular/material/sort';
import { LocationService } from 'app/location.service';
import Swal from 'sweetalert2';
import { AdminParking } from 'app/model/adminParking';
import { AuthServiceService } from 'app/auth-service.service';

@Component({
  selector: 'app-location-voiture',
  templateUrl: './location-voiture.component.html',
  styleUrls: ['./location-voiture.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class LocationVoitureComponent implements OnInit {
  displayedColumns: string[] = ['idLocation', 'voiture', 'client','prix' ,'duree','dateLocation','action'];
  dataSource = new MatTableDataSource<Location>();
  locations: Location[] = [];
  locationfiltrer: any= [];
  adminParking: number;
 
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort ) sort!: MatSort;
  constructor(private locationService: LocationService ,private dialogRef: MatDialog, private authService: AuthServiceService) {
    this.adminParking = JSON.parse(localStorage.getItem('idAdminParking')!);
    console.log("Admin recuperer efffff ", this.adminParking);
    
    // this.dataSource = new MatTableDataSource(this.locations);
    this.chargerLogation();
  }

  ngOnInit(): void {
    this.locationService.update$.subscribe(()=>{
      this. chargerLogation();
    });
    this.authService.update$.subscribe(() =>{
      this.adminParking= JSON.parse(localStorage.getItem('idAdminParking')!);
    });
  }

  chargerLogation(){
    this.locationService.getAllLocations().subscribe(location => {
      // const donner = location.filter((data :any)=> data.location.voiture.adminParking.idAdminParking === this.adminParking)
      //   console.log("date========", donner);
      // this.locations = location;
        this.locations = location.filter((data :any)=> data.voiture.adminParking.idAdminParking === this.adminParking)
      this.locationfiltrer = this.locations
      this.dataSource = new MatTableDataSource(this.locationfiltrer );
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog() {
    const dialog = this.dialogRef.open(LocationFormulaireComponent, {
      width: '400px',
    })
 }
 delete(idLocation:number){
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
      this.locationService.deleteLocation(idLocation).subscribe(
    (result) => {
      console.log(result);
      this.locationService.triggerupdate();
    }
        );
        console.log("idLocation ", idLocation);
        this.locationService.triggerupdate();
      this.chargerLogation();
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