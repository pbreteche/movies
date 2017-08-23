export class Movie {
  actors: string[];
  constructor(
    public title: string,
  public year: number
  ) {
    this.actors = [];
  }
}
