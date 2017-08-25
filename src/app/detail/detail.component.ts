import {Component, OnInit} from '@angular/core';
import {Movie} from '../model/movie';
import {MovieRepository} from '../model/movie-repository.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  template: `
    <h2>{{movie.title}}</h2>
    <p class="selected">
      Ce film est sorti en <input type="text" [(ngModel)]="movie.year">.
      Avec {{ movie.actors.join() }}
    </p>
    <a (click)="back()">Retour à la liste</a>
`
})
export class DetailComponent implements OnInit {
  private currentId: number;
  private movie: Movie;

  constructor(
    private movieRepository: MovieRepository,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movieRepository.currentMovie.subscribe((movie: Movie) => {
      this.movie = movie;
    });
   this.currentRoute.params.subscribe((params: Params) => {
     this.currentId = +params['id'];
     this.movieRepository.setCurrentId(this.currentId);
    })
  }

  back() {
    history.back();
  }
}
