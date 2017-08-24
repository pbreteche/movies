import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Movie} from './model/movie';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const movies = [
      new Movie('Dunkerque', 2017),
      new Movie('Cars 3', 2017),
      new Movie('La Planète des Singes - Suprématie', 2017),
      new Movie('La Ligne verte ', 2000),
      new Movie('Your Name ', 2016),
      new Movie(' Tu ne tueras point ', 2016),
    ];

    movies[0].actors = ['Fionn Whitehead', 'Mark Rylance'];
    movies[1].actors = ['Guillaume Canet', 'Gilles Lellouche'];
    movies[2].actors = ['Andy Serkis', ' Woody Harrelson'];
    movies[3].actors = ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse'];
    movies[4].actors = ['Andrew Garfield'];

    return {movies};
  }
}
