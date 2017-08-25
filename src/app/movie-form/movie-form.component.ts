import {Component} from '@angular/core';
import {Movie} from '../model/movie';
import {FormGroup} from '@angular/forms';
import {MovieRepository} from '../model/movie-repository.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  newMovie: Movie;
  newActor = '';
  currentYear = new Date().getFullYear();

  constructor(
    private movieRepository: MovieRepository,
    private router: Router
  ) {
    this.newMovie = new Movie('', null);
  }

  trackActor(index: number, actor: string) {
    return index;
  }

  addActor() {
    this.newMovie.actors.push(this.newActor);
    this.newActor = '';
  }

  addMovie(movieForm: FormGroup) {
    this.movieRepository.add(this.newMovie).then(
      (movie: Movie) => {
        this.router.navigate(['/catalog', movie.id]);
      }
    );
    this.newMovie = new Movie('', null);
    movieForm.reset();
    this.newMovie.actors = [];
  }
}
