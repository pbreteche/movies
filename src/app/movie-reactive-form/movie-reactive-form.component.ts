import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Movie} from '../model/movie';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-movie-reactive-form',
  templateUrl: './movie-reactive-form.component.html',
  styleUrls: ['./movie-reactive-form.component.css']
})
export class MovieReactiveFormComponent implements OnChanges {
  @Input() movie: Movie;
  movieForm: FormGroup;

  constructor() {
    this.createForm();
  }

  createForm() {
    this.movieForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      year: new FormControl('', [Validators.required]),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.movieForm.get('title').setValue(changes.movie.currentValue.title);
    this.movieForm.get('year').setValue(changes.movie.currentValue.year);
  }

  updateMovie() {
    this.movie.title = this.movieForm.value.title;
    this.movie.year = this.movieForm.value.year;
    this.movieForm.markAsUntouched();
  }

}
