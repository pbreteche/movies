import {TestBed, async, inject} from '@angular/core/testing';

import { CatalogComponent } from './catalog.component';
import {RouterLinkStubDirective} from '../../testing/router-link.stub.directive';
import {MovieRepository} from '../model/movie-repository.service';
import {MovieRepositoryStub} from '../../testing/movie-repository.stub.service';
import {Inject} from '@angular/core';
import {Subject} from 'rxjs';
import {Movie} from '../model/movie';

describe('CatalogComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CatalogComponent,
        RouterLinkStubDirective
      ],
      providers: [
        {
          provide: MovieRepository,
          useValue: { moviesData: [], movies: new Subject<Movie[]>()}
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CatalogComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(CatalogComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CatalogComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
