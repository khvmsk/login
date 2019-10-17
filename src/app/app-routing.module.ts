import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ServiceelementComponent } from './serviceelement/serviceelement.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{
  path :'recipes',
  component:RecipesComponent
},
{
  path :'shopinglist',
  component:ShoppingListComponent
},
{
  path :'servicelement',
  component:ServiceelementComponent
},
{
  path:'Cockpit',
  component:CockpitComponent
},
{
path: 'customerdetails',
component : CustomerdetailsComponent
},
{
  path: 'login',
  component : LoginComponent
  },
  {
    path: 'dashboard',
    component : DashboardComponent
    },
  {
    path: '',
    pathMatch:'full',
    redirectTo:'login'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
