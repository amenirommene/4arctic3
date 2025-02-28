import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';
import { HttpClientModule} from '@angular/common/http';
import { AddResidenceComponent } from './add-residence/add-residence.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    ResidencesComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddApartmentComponent,
    AddResidenceComponent
  ],
  imports: [ //la liste des modules utilisés par les composants de ce module
    BrowserModule, //obligatoire
    AppRoutingModule, //Routage
    FormsModule,  //pour pouvoir utiliser la directive NgModel
    ReactiveFormsModule ,//pour pouvoir utiliser formGroup, .....
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
