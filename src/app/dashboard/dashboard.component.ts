// import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ServiceVoitureService } from 'app/service-voiture.service';
import { Voiture } from 'app/model/voiture';
import { Achat } from 'app/model/achat';
import { Maintenance } from 'app/model/maintenance';
import { MaintenanceService } from 'app/maintenance.service';
import { VenteServiceService } from 'app/vente-service.service';
import { AdminParking } from 'app/model/adminParking';
import { AuthServiceService } from 'app/auth-service.service';
import { Demande } from 'app/model/demande';
import { DemandeService } from 'app/service/demande.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class DashboardComponent implements OnInit,AfterViewInit  {
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email'];

  adminParking: AdminParking | any;
  voitures: Voiture[]= [];
  nbrVoiture: number;
  revenus: Achat[]= [];
  montantR: number;
  demandes:Demande;
  nbrDemande:number;
  maintenances: Maintenance[]= [];
  maintenanceNbr: number;
  dataSource = new MatTableDataSource<Voiture>();
  dataSource2 = new MatTableDataSource<Achat>();
  dataSource3 = new MatTableDataSource<Maintenance>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {  
    this.dataSource.paginator = this.paginator;
  }

  constructor(private voitureService: ServiceVoitureService, private demandeService:DemandeService,private authService: AuthServiceService,private maintService: MaintenanceService, private revenu: VenteServiceService) {
    this.adminParking = JSON.parse(localStorage.getItem('idAdminParking')!);
    console.log("Admin recuperer ", this.adminParking);
    this.chargerVoiture();
    this.chargerMaintenance();
   }

   



//////////////////////////////--------------------------------Statistique--------------------------/////////////////////////////////////
startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
////////////////////////////------------------Statistique-------------------///////////////////////////////////////
  ngOnInit() {
    // Voiture
    this.authService.update$.subscribe(() =>{
      this.adminParking= JSON.parse(localStorage.getItem('idAdminParking')!);
    });

    this.voitureService.update$.subscribe(()=>{
        this.chargerVoiture();
      });
      this.maintService.update$.subscribe(()=>{
        this.chargerMaintenance();
      })
      this.chargerMaintenance();

      this.demandeService.getAllDemande().subscribe(
        (data) => {
          this.demandes = data.filter(demande => demande.statutDemande === "reçu");
          console.log(this.demandes)
          
        },
        (error) => {
          console.error('Erreur lors du chargement de la liste des demandes reçu:', error);
        }
      );







//////////////-------------------------Statistique----------------------//////////////////////////////////
      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };
     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);
      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);
      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }

  chargerVoiture() {
    const idAdminParking= this.adminParking;
    console.log("keita id : ", this.adminParking)
    this.voitureService.listerVoiture(idAdminParking).subscribe( voitures =>{
      this.voitures= voitures;
      this.nbrVoiture= this.voitures.length 
    });
    
    console.log("nbr voiture: ", this.nbrVoiture ) 
  }
  chargerMaintenance(){
    this.maintService.getAllMaintenances().subscribe(maintenances => {
     const data = this.maintenances.filter((data)=> data.voiture.adminParking.idAdminParking == this.adminParking)
      this.maintenances = maintenances;
      console.log("data= ", data);
      // this.dataSource3 = new MatTableDataSource(this.maintenances);
      this.maintenanceNbr= data.length
      
    });
    console.log("nbr maintenance:" ,this.maintenanceNbr);
  }

}

