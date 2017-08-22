import {Component, Input} from '@angular/core';
import {Movie} from '../model/movie';

@Component({
  selector: 'app-detail',
  template: `
    <h2>{{movie.title}}</h2>
    <p>Ce film est sorti en {{movie.year}}</p>
`
})
export class DetailComponent {
  @Input() movie: Movie;
}

