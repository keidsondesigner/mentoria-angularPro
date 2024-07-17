/* eslint-disable no-console */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '@ecommerce/auth-data-access';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.email$.pipe(
      tap((email) => console.log(email)),
      // usuário não tem email no estado (acesse a página login) :  usuário tem email no estado (acesse a página home) vá direto para home, qunado tiver email 
      map((email) => (!email ? true : this.router.createUrlTree(['/'])))
    );
  }
}
