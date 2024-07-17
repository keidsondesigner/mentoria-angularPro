/* eslint-disable @nx/enforce-module-boundaries */
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '@ecommerce/auth-data-access';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  const setup = (email: string | null) => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: { email$: of(email) } }
      ]
    });

    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  };

  it('should return true when user email$ is not truthy', (done) => {
    setup(null);

    guard.canActivate().subscribe((result) => {
      expect(result).toBe(true);
      done();
    });
  });

  it('should not return true when user email$ is truthy', (done) => {
    setup('mail@mail.com');
    const urlTree = router.createUrlTree(['/']);
    jest.spyOn(router, 'createUrlTree').mockReturnValue(urlTree);

    guard.canActivate().subscribe((result) => {
      expect(result).not.toBe(true); // Verifica que o resultado não é true
      expect(result).toBe(urlTree); // Verifica que o resultado é um UrlTree
      done();
    });
  });
});
