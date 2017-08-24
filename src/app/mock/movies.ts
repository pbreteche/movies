import {Movie} from '../model/movie';

export const MOVIES = [
  new Movie('Dunkerque', 2017),
  new Movie('Cars 3', 2017),
  new Movie('La Planète des Singes - Suprématie', 2017),
  new Movie('La Ligne verte ', 2000),
  new Movie('Your Name ', 2016),
  new Movie(' Tu ne tueras point ', 2016),
];

MOVIES[0].actors = ['Fionn Whitehead', 'Mark Rylance'];
MOVIES[1].actors = ['Guillaume Canet', 'Gilles Lellouche'];
MOVIES[2].actors = ['Andy Serkis', ' Woody Harrelson'];
MOVIES[3].actors = ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse'];
MOVIES[4].actors = ['Andrew Garfield'];
