import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.service';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
      //  { provide: AuthGuardDependency, class: AuthGuardDependencyMock }
      ]
    });
  });

  it('should be created', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
