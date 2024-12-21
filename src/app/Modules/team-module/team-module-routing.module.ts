import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTeamComponent } from 'src/app/Components/form-team/form-team.component';
import { MyTeamComponent } from 'src/app/Components/my-team/my-team.component';
import { TeamsComponent } from 'src/app/Components/teams/teams.component';
const routes: Routes = [
 
  {path: 'add' , component:FormTeamComponent },
  {path: 'shows' , component:MyTeamComponent },
  {path:'', component:TeamsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class teamRoutingModule { }
