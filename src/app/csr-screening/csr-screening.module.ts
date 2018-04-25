import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsrAppComponent } from './csr-app/csr-app.component';
import { SharedModule } from '../shared/shared.module'
import { CsrSearchService}  from './services/csr-search.service'

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CsrAppComponent],
  providers:[CsrSearchService]
})
export class CsrScreeningModule { }
