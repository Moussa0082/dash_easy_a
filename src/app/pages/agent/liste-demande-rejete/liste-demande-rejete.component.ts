import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Demande } from 'app/model/demande';
import { AssignAgentComponent } from 'app/pages/admin/assign-agent/assign-agent.component';
import { DemandeService } from 'app/service/demande.service';

@Component({
  selector: 'app-liste-demande-rejete',
  templateUrl: './liste-demande-rejete.component.html',
  styleUrls: ['./liste-demande-rejete.component.scss']
})
export class ListeDemandeRejeteComponent implements OnInit {

  demandes : Demande | any = [];
  agents: any[] = [];


  constructor(private dialog:MatDialog, private demandeService: DemandeService) { }


  ngOnInit() : void{
    this.demandeService.getAllDemande(  ).subscribe(
      (data) => {
        this.demandes = data.filter(demande => demande.statutDemande === "recu");
        console.log(this.demandes)
      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des demandes réjetés:', error);
      }
    );
    this.demandeService.getAgents().subscribe(agents => {
      this.agents = agents;
    });
  }

  openDialog(demandeId: number): void {
    const dialogRef = this.dialog.open(AssignAgentComponent, {
      data: { agents: this.agents, demandeId: demandeId }
    });
  
    dialogRef.afterClosed().subscribe(selectedAgentId => {
      if (selectedAgentId) {
        this.demandeService.assignDemandeToAgent(demandeId, selectedAgentId).subscribe(result => {
          console.log(result);
        });
      }
    });
  }


}
