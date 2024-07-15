import { TestBed } from '@angular/core/testing';

import { httpErrorsInterceptor } from './http-errors.interceptor';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

describe('HttpErrorsInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let matSnackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useValue: httpErrorsInterceptor, multi: true },
        { provide: MatSnackBar, useValue: { open: jest.fn() } }
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    matSnackBar = TestBed.inject(MatSnackBar);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(httpErrorsInterceptor).toBeDefined();
  });

  it('should open notification on http error', () => {
    jest.spyOn(matSnackBar, 'open'); // ouve o método "open" do matSnackBar
    httpClient.get('/test').subscribe(); // me inscrevo e chamo a requisição 

    const request = httpMock.expectOne('/test'); // espero que seja feito uma requisição GET, para esse edpoint
    request.error(new ProgressEvent('error')); // deve ocorrer um erro

    expect(matSnackBar.open).toHaveBeenCalled();
    expect(request.request.headers.has('x-access-token')).toBe(true);
  });
});
