import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Movie} from '../model/movie';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  newMovie: Movie;
  newActor = "";
  currentYear = new Date().getFullYear();
  @Output() onSubmit = new EventEmitter<Movie>();

  constructor() {
    this.newMovie = new Movie('', null);
  }

  ngOnInit() {
  }

  trackActor(index: number, actor: string) {
    return index;
  }

  addActor() {
    this.newMovie.actors.push(this.newActor);
    this.newActor="";
  }

  addMovie(movieForm: FormGroup) {
    this.onSubmit.emit(this.newMovie);
    this.newMovie = new Movie('', null);
    movieForm.reset();
    this.newMovie.actors=[];
  }
}
