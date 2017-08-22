import { Component } from '@angular/core';
import {MOVIES} from './mock/movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies';
  movies = MOVIES;
  selectedMovie = MOVIES[0];
}
