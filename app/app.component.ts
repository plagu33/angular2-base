import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {TestComponent} from './test.component';

@Component({
    selector: 'my-app',
    template:
    `
    <h1>Commponent router</h1>
    <nav>
      <a [routerLink]="['Inicio']">inicio</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/inicio', name: 'Inicio', component: TestComponent}
])
export class AppComponent { }
