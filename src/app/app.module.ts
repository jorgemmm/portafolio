
//NameSpaces : Libraríes, imports 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

//Core Culture localizations
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import localDe from '@angular/common/locales/de';

import { registerLocaleData } from '@angular/common';

// the second parameter 'fr-FR' is optional


//Rutas
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { PaymeComponent } from './payme/payme.component';
import { ContactComponent } from './shared/contact/contact.component';
import { CheckoutComponent } from './payme/checkout/checkout.component';



//Español, 
registerLocaleData(localEs);//, 'es-ES');
registerLocaleData(localFr);//, 'es-ES');
registerLocaleData(localDe);//, 'es-ES');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
    PaymeComponent,
    ContactComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {
    provide: LOCALE_ID,
    useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
