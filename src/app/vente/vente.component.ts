import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { VenteFormulaireComponent } from 'app/vente-formulaire/vente-formulaire.component';
import { Achat } from 'app/model/achat';
import { MatSort } from '@angular/material/sort';
import { VenteServiceService } from 'app/vente-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class VenteComponent implements OnInit {
  displayedColumns: string[] = ['idAchat', 'voiture', 'client','prix' ,'dateAchat', 'action'];
  dataSource = new MatTableDataSource<Achat>();
  achats: Achat[] = [];
 
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort ) sort!: MatSort;
  constructor(private achatService: VenteServiceService ,private dialogRef: MatDialog) {
    
    this.chargerVente();
    // this.dataSource = new MatTableDataSource(this.achats);
  }
  chargerVente(){
    this.achatService.getAllAchats().subscribe(achat => {
      this.achats = achat;
      this.dataSource = new MatTableDataSource(this.achats);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
    this.achatService.update$.subscribe(()=>{
      this.chargerVente();
    })
  }
    openDialog() {
      const dialog = this.dialogRef.open(VenteFormulaireComponent, {
        width: '400px',
      })
   }

   delete(idAchat:number){
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
        this.achatService.deleteAchat(idAchat).subscribe(
      (result) => {
        console.log(result);
        this.achatService.triggerupdate();
      }
          );
          console.log("idAchat ", idAchat);
          this.achatService.triggerupdate();
        this.chargerVente();
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
