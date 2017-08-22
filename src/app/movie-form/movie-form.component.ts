import { Component, OnInit } from '@angular/core';
import {Movie} from '../model/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  newMovie: Movie;

  constructor() {
    this.newMovie = new Movie('', null);
  }

  ngOnInit() {
  }

}
