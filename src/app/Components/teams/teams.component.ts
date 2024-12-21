import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamServiceService } from 'src/app/Services/team-service.service';
import { TeamComponent } from '../team/team.component';
import { Team } from 'src/app/Models/team';
import { Subscription } from 'rxjs';
import { Participant } from 'src/app/Models/participant';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  id!: number;
  constructor(private activated:ActivatedRoute,private consumer:TeamServiceService,private router:Router){

  }
  @ViewChildren(TeamsComponent)children!:QueryList<TeamComponent>;
  
  team : Team[] = [];
  ngOnInit(): void {
    this.Subscribers=this.consumer.get<Team[]>('team').subscribe({
      next:(data)=>this.team=data,
      error:(e)=>console.log(e),
      complete:()=>console.log("termier")
    });
  }
  Subscribers!: Subscription;
  ngOnDestroy():void{
  this.Subscribers.unsubscribe();
  }
  Details(event: any): void {
       console.log(event);
       this.consumer.get<Team[]>('team')
         .subscribe({
           next: (data) => {
              data.forEach((element) => {
                console.log(element);
                element.id == event && this.consumer.get<Participant>('participant',element.id).subscribe()
              });
         }
       })
   }
}
