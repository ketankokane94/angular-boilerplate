import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AppService} from '../services/app.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private appService:AppService)  { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.appService.getHeaderUrl();    
  }
}
