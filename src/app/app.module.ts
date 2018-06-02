import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CsrAppComponent } from './csr-screening/csr-app/csr-app.component';
import { GcarsAppComponent } from './gcars-search/gcars-app/gcars-app.component';
import { HeaderComponent } from './header/header.component'

import {AppService} from './services/app.service';

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule
  ],
  declarations: [
    AppComponent,
    CsrAppComponent,
    GcarsAppComponent,
    HeaderComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
