import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import {CsrAppComponent } from './csr-screening/csr-app/csr-app.component';
import {GcarsAppComponent} from './gcars-search/gcars-app/gcars-app.component'

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CsrAppComponent,
    GcarsAppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
