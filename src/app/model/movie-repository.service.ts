import {Injectable} from '@angular/core';
import {Movie} from './movie';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class MovieRepository {
  moviesData: Movie[] = [];
  movies: Subject<Movie[]>;
  currentMovie: Subject<Movie>;
  private id = -1;

  constructor(private http: Http) {
    this.movies = new Subject<Movie[]>();
    this.currentMovie = new Subject<Movie>();
    this.init();
  }

  init() {
    this.http.get('api/movies')
      .subscribe(response => {
        console.debug(response);
        this.moviesData = response.json().data as Movie[];
        this.movies.next(this.moviesData);
        if (this.id !== -1) {
          this.currentMovie.next(this.findById(this.id));
        }
      });
  }

  add(movie: Movie) {
    return this.http.post('api/movies', movie)
      .toPromise()
      .then(response => {
        let movie = response.json().data as Movie;
        this.moviesData.push(movie);
        this.movies.next(this.moviesData);
        return movie;
      })
      .catch(console.error)
  }

  setCurrentId(id: number) {
    this.id = id;
    this.currentMovie.next(this.findById(id));
  }

  private findById(id: number) {
    for(let movie of this.moviesData) {
      console.debug(movie);
      if (movie.id === id) {
        return movie;
      }
    }
    return new Movie('Loading...', 2017);
  }

  remove(movie: Movie) {
    let movieIndex = this.moviesData.indexOf(movie);
    if (movieIndex !== -1) {
      this.moviesData.splice(movieIndex, 1);
      this.movies.next(this.moviesData);
    }

    return this.http.delete('api/movies/' + movie.id).subscribe(console.log)
  }

  update(movie: Movie) {
    let movieIndex = this.moviesData.indexOf(movie);
    if (movieIndex === -1) {
      throw 'you cannot update an unexisting movie';
    }
    this.moviesData[movieIndex] = movie;
    this.movies.next(this.moviesData);
    this.http.put('api/movies/' + movie.id, movie)
      .subscribe(console.log);

  }
}
