import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/Models/participant';
import { Team } from 'src/app/Models/team';
import { TeamServiceService } from 'src/app/Services/team-service.service';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css']
})
export class FormTeamComponent implements OnInit {
  constructor( private consumer:TeamServiceService){}
  ngOnInit(): void {
   
  }
  team: Team = new Team(); 
  participants: Participant = new Participant(); 
  ajouter(){
    this.consumer.add<Team>('team', this.team)
    .subscribe({
    next: () => alert('Team ajouté avec succès !')
  });
  this.consumer.add<Participant>('participants', this.team.participants)
  .subscribe({
  next: () => alert('participant ajouté avec succès !')
});
  }
}
