import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './componets/about/about.component';
import { HomeComponent } from './componets/home/home.component';
import { LoginComponent } from './componets/login/login.component';
import { HeaderComponent } from './componets/header/header.component';
import { CustumerCareComponent } from './componets/custumer-care/custumer-care.component';
import { JourneySummaryComponent } from './componets/journey-summary/journey-summary.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { PassengerInfoComponent } from './componets/passenger-info/passenger-info.component';
import { SelectSeatsComponent } from './componets/select-seats/select-seats.component';
import { ViewTicketComponent } from './componets/view-ticket/view-ticket.component';
import { AvailableBusesComponent } from './componets/available-buses/available-buses.component';

const routes: Routes = [
  {path:'',component: HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'availablebuses',component: AvailableBusesComponent},
  {path:'buses/:id',component: SelectSeatsComponent},
  {path:'passengerInfo', component: PassengerInfoComponent},
  {path:'about',component:AboutComponent},
  {path:'helpline',component:CustumerCareComponent},
  {path:'login',component:LoginComponent},
  {path: 'journeyDetails/:id', component: JourneySummaryComponent},
  {path: 'viewticket/:id', component: ViewTicketComponent},
  {path: 'notfound', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
