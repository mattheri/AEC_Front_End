import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StarsComponent } from './stars/stars.component';
import { HotelComponent } from './hotel/hotel.component';
import { TripdetailsComponent } from './tripdetails/tripdetails.component';
import { TripcardComponent } from './tripcard/tripcard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TripsComponent } from './trips/trips.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavformComponent } from './sidenavform/sidenavform.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    StarsComponent,
    HotelComponent,
    TripdetailsComponent,
    TripcardComponent,
    TripsComponent,
    SidenavComponent,
    SidenavformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
