import {Injectable} from '@angular/core';
import {Movie} from '../app/model/movie';
import {Subject} from 'rxjs';

@Injectable()
export class MovieRepositoryStub {
  moviesData: Movie[] = [];
  movies: Subject<Movie[]>;
}
