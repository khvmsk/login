import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ServiceelementComponent } from './serviceelement/serviceelement.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { Service } from './service.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material' 

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ServiceelementComponent,
    CockpitComponent,
    CustomerdetailsComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,MatIconModule, MatSidenavModule, MatListModule, MatButtonModule
  ],
  providers: [
    Service,
    ApiService,
    Title
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
