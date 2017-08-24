import {Component, Inject} from '@angular/core';
import {Movie} from './model/movie';
import {MovieRepository} from './model/movie-repository.service';
import {API_URL_DATA} from './config/config';
import {InjectionToken} from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

export let API_URL = new InjectionToken('apiUrl');
export let API_URL_ALIAS = new InjectionToken('apiUrlAlias');
export let API_URL_FACTORY = new InjectionToken('apiUrlFactory');
let ENV = new InjectionToken('env');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    MovieRepository,
  //  { provide: MovieRepository, useClass: MovieRepository },
  //  { provide: MovieRepository, useValue: new MovieRepository() },
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
  ],
  animations: [
    trigger('movieState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'Movies';
  movies: Movie[];
  selectedMovie: Movie;

  constructor(
    private movieRepository: MovieRepository,
    @Inject(API_URL) apiUrl,
    @Inject(API_URL_FACTORY) testFactory
  ) {
    movieRepository.getAll().subscribe(movies => this.movies = movies);
  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

  refresh() {
    this.movieRepository.init();
  }
}
