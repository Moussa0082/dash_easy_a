import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ClientModel} from '../../app/model/clientModel';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { ServiceClientService } from 'app/service-client.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class UtilisateursComponent {
  displayedColumns: string[] = ['nom', 'prenom', 'adresse', 'email'];  
  dataSource = new MatTableDataSource<ClientModel>();
  users: ClientModel[] = [];
  nbrUser: number;
 
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort ) sort!: MatSort;
  constructor(private serviceCient: ServiceClientService) {
    
   
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
    this.serviceCient.getAllClients().subscribe(user => {
      this.users = user;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.nbrUser= this.users.length;
    });
  }

  // onDelete(id:number){
  //  this.serviceCient.(id).subscribe({
  //   next: res => {
      
  //     console.log('Utilisateur supprimé avec succès.', res);
  //     this.users = this.users.filter(user => user.idUtilisateur !== id);
  //   },
  //   error: err => {
      
  //     console.error('Une erreur est survenue lors de la suppression de l\'utilisateur.', err);
  //   }
  // });
 
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

