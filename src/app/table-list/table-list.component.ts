
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { TextDecoderStream } from 'node:stream/web';
import { Time } from '@angular/common';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class TableListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {  
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  voiture: string;
  id: number;
  client: string;
  date: string;
  duree: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, voiture: 'Koureissi', client:'Mohamed', date: '2023-10-12', duree: '08H'},
  {id: 1, voiture: 'Koureissi', client:'Mohamed', date: '2023-10-12', duree: '08H'},
  {id: 1, voiture: 'Koureissi', client:'Mohamed', date: '2023-10-12', duree: '08H'},
  {id: 1, voiture: 'Koureissi', client:'Mohamed', date: '2023-10-12', duree: '08H'},
  {id: 1, voiture: 'Koureissi', client:'Mohamed', date: '2023-10-12', duree: '08H'},
  {id: 1, voiture: 'Koureissi', client:'Mohamed', date: '2023-10-12', duree: '08H'},
];
