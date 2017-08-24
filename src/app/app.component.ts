import {Component, Inject} from '@angular/core';
import {Movie} from './model/movie';
import {MovieRepository} from './model/movie-repository.service';
import {API_URL_DATA} from './config/config';
import {InjectionToken} from '@angular/core';

export let API_URL = new InjectionToken('apiUrl');
export let API_URL_ALIAS = new InjectionToken('apiUrlAlias');
export let API_URL_FACTORY = new InjectionToken('apiUrlFactory');
let ENV = new InjectionToken('env');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
  //  MovieRepository
  //  { provide: MovieRepository, useClass: MovieRepository },
    { provide: MovieRepository, useValue: new MovieRepository() },
    { provide: API_URL, useValue: API_URL_DATA },
    { provide: API_URL_ALIAS, useExisting: API_URL },
    { provide: ENV, useValue: 'prod'},
    {
      provide: API_URL_FACTORY,
      useFactory: env => {
        if (env === 'dev') {
          return 'www.example.org'
        }
        return 'dev.example.org'
      },
      deps: [ENV]}
  ]
})
export class AppComponent {
  title = 'Movies';
  movies: Movie[];
  selectedMovie: Movie;

  constructor(
    movieRepository: MovieRepository,
    @Inject(API_URL) apiUrl,
    @Inject(API_URL_FACTORY) testFactory
  ) {
    this.movies = movieRepository.movies;
    console.log(testFactory);
  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }
}
