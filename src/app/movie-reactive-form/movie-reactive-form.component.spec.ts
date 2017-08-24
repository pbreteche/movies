import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieReactiveFormComponent } from './movie-reactive-form.component';

describe('MovieReactiveFormComponent', () => {
  let component: MovieReactiveFormComponent;
  let fixture: ComponentFixture<MovieReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
