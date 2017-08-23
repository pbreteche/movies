import {Component, Input} from '@angular/core';
import {Movie} from '../model/movie';

@Component({
  selector: 'app-detail',
  template: `
    <h2>{{movie.title}}</h2>
    <p class="selected">
      Ce film est sorti en <input type="text" [(ngModel)]="movie.year">.
      Avec {{ movie.actors.join() }}
    </p>
`
})
export class DetailComponent {
  @Input() movie: Movie;
}

