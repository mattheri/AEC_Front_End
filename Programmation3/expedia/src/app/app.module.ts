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

@NgModule({
  declarations: [
    AppComponent,
    StarsComponent,
    HotelComponent,
    TripdetailsComponent,
    TripcardComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
