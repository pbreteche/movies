import {Component, OnInit} from '@angular/core';
import {Movie} from '../model/movie';
import {MovieRepository} from '../model/movie-repository.service';

@Component({
  selector: 'catalog-root',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.css']
})
export class CatalogComponent implements OnInit {
  title = 'Movies';
  movies: Movie[] = [];

  constructor(
    private movieRepository: MovieRepository
  ) {
    this.movies = this.movieRepository.moviesData;
  }

  ngOnInit() {
    this.movieRepository.movies.subscribe(movies => this.movies = movies);
  }

  refresh() {
    this.movieRepository.init();
  }
}
