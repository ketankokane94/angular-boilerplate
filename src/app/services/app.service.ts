import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  getHeaderUrl(){
    let items = [
        {label:'Bio',icon:'fa-user'},
        {label: 'Stats', icon: 'fa-bar-chart',url:'#/csrScreening'},
        {label: 'Calendar', icon: 'fa-calendar',url:'#/gcarsSearch'}
    ];
    return items;
  }
}
