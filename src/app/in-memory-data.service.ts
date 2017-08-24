import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Movie} from './model/movie';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const movies = [
      {
        id: 0,
        title: 'Dunkerque',
        year: 2017,
        actors: ['Fionn Whitehead', 'Mark Rylance']
      },
      {
        id: 1,
        title: 'Cars 3',
        year: 2017,
        actors: ['Guillaume Canet', 'Gilles Lellouche']
      },
      {
        id: 2,
        title: 'La Planète des Singes - Suprématie',
        year:  2017,
        actors: ['Andy Serkis', ' Woody Harrelson']
      },
      {
        id: 3,
        title: 'La Ligne verte ',
        year: 2000,
        actors: ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse']
      },
      {
        id: 4,
        title: 'Your Name ',
        year: 2016,
        actors: ['Andrew Garfield']
      },
      {
        id: 5,
        title: ' Tu ne tueras point ',
        year: 2016
      },
    ];

    return {movies};
  }
}
