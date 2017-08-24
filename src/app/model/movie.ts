export class Movie {
  actors: string[];
  id: number;
  constructor(
    public title: string,
    public year: number
  ) {
    this.actors = [];
  }
}
