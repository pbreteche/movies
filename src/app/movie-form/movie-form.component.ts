import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Movie} from '../model/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  newMovie: Movie;
  currentYear = new Date().getFullYear();
  @Output() onSubmit = new EventEmitter<Movie>();

  constructor() {
    this.newMovie = new Movie('', null);
  }

  ngOnInit() {
  }

  addMovie() {
    this.onSubmit.emit(this.newMovie);
    this.newMovie = new Movie('', null);
  }
}
