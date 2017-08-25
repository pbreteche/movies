import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Movies app</h1>
    <nav>
    <a routerLink="dashboard">Accueil</a>
    <a routerLink="catalog">Catalogue</a>
</nav>
<router-outlet></router-outlet>
`
})
export class AppComponent {

}
