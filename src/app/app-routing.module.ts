import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  
{path:"", redirectTo:'/teams/shows', pathMatch: 'full'},
 
{ path:'teams', loadChildren: () => 
    import ('./Modules/team-module/team-module.module')
    .then((m) => m.TeamModuleModule)
  },
  { path: "**", component: NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
