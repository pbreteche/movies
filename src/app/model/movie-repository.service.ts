import {MOVIES} from '../mock/movies';
import {Injectable} from '@angular/core';

@Injectable()
export class MovieRepository {
  movies = MOVIES;
}
