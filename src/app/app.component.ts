import { Component } from '@angular/core';
import {MOVIES} from './mock/movies';
import {Movie} from './model/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies';
  movies = MOVIES;
  selectedMovie: Movie;

  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }
}
