import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { HeaderComponent } from './header/header.component';
import { RechercheComponent } from './recherche/recherche.component';
import { Hero1Component } from './hero1/hero1.component';
import { Hero2Component } from './hero2/hero2.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FicheproduitComponent } from './ficheproduit/ficheproduit.component';
import { ImageComponent } from './image/image.component';
import { ProduitComponent } from './produit/produit.component';
import { PrixComponent } from './prix/prix.component';
import { DetailsComponent } from './details/details.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    HeaderComponent,
    RechercheComponent,
    Hero1Component,
    Hero2Component,
    FooterComponent,
    CarouselComponent,
    FicheproduitComponent,
    ImageComponent,
    ProduitComponent,
    PrixComponent,
    DetailsComponent,
    ListeProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
