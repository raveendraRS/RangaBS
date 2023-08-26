import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { LoginComponent } from './componets/login/login.component';
import { AboutComponent } from './componets/about/about.component';
import { ContactComponent } from './componets/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvailableBusesComponent } from './componets/available-buses/available-buses.component';
import { CustumerCareComponent } from './componets/custumer-care/custumer-care.component';
import { JourneySummaryComponent } from './componets/journey-summary/journey-summary.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { PassengerInfoComponent } from './componets/passenger-info/passenger-info.component';
import { SelectSeatsComponent } from './componets/select-seats/select-seats.component';
import { ViewTicketComponent } from './componets/view-ticket/view-ticket.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    AvailableBusesComponent,
    CustumerCareComponent,
    JourneySummaryComponent,
    NotFoundComponent,
    PassengerInfoComponent,
    SelectSeatsComponent,
    ViewTicketComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
