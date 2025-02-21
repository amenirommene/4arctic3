import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';

const routes: Routes = [

  {path:"residences", component:ResidencesComponent,children:[
    {path:"details/:id", component:ResidenceDetailsComponent},
  ] },
  {path:"", redirectTo:"home", pathMatch:"full"}, //au chargement de l'application
  {path:"home", component:HomeComponent, children:[
    {path:"details/:id", component:ResidenceDetailsComponent},
  ]},
  {path:"test", component:TestComponent},
  {path:"details/:id", component:ResidenceDetailsComponent},

  {path:"**", component:NotFoundComponent}, // toujours à la fin

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
