import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>hello</h2>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'app';
}
