import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CsrAppComponent} from './csr-screening/csr-app/csr-app.component'
import {GcarsAppComponent} from './gcars-search/gcars-app/gcars-app.component'
import { Component } from '@angular/core/src/metadata/directives';

const routes: Routes = [
  {
      path: 'csrScreening',
      component: CsrAppComponent
  },
  {
    path:'gcarsSearch',
   component: GcarsAppComponent
  }
  
];

@NgModule({
  imports : [ RouterModule.forRoot( routes ,{useHash:true}) ] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule {}