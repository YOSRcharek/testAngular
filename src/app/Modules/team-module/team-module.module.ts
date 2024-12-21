import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from '../../Components/teams/teams.component';
import { TeamComponent } from '../../Components/team/team.component';
import { FormTeamComponent } from '../../Components/form-team/form-team.component';
import { MyTeamComponent } from '../../Components/my-team/my-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { teamRoutingModule } from './team-module-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TeamServiceService } from 'src/app/Services/team-service.service';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    TeamsComponent,
    TeamComponent,
    FormTeamComponent,
    MyTeamComponent,
  ],
  imports: [
    teamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  
  ]
})
export class TeamModuleModule { }
