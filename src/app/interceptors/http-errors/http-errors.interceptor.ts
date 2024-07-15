/* eslint-disable no-console */
import {
  HttpRequest,
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn
} from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, throwError } from 'rxjs';

export const httpErrorsInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  console.log('Request:', req.url, req.method, req.body);

  // injetando o MatSnackBar
  const matSnackBar = inject(MatSnackBar);

  // exemplo de como injetar o token no headers da requisição
  const cloneRequest = req.clone({
    setHeaders: {
      'x-access-token': 'meu_token'
    }
  });

  return next(cloneRequest).pipe(
    // CAPTURA O ERRO
    catchError((error) => {
      // EXECUTA ALGUMA AÇÃO COM O ERRO CAPTURADO
      matSnackBar.open('Erro na requisição', 'Fechar', { // matSnackBar só é chamada quando ocorre um erro
        verticalPosition: 'bottom', 
        horizontalPosition: 'right', 
        duration: 5000,
      });

      return throwError(() => error); // PASSA O ERRO PRA FRENTE
    })
  );
};
