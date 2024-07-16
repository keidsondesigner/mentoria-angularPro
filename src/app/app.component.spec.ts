/* eslint-disable @nx/enforce-module-boundaries */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '@ecommerce/layout';
import { ProductSearchComponent } from '@ecommerce/product-search';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from 'modules/ui/product/src/components/cart/cart.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent, 
        RouterTestingModule, 
        HttpClientTestingModule,
        NoopAnimationsModule,
        HeaderComponent, 
        ProductSearchComponent,
        CartComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Ecommerce');
  });

  it(`should have as title 'ecommerce'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ecommerce');
  });

  it('should exist a header', () => {
    const header: HTMLHeadElement = fixture.nativeElement.querySelector('header');
    expect(header).toBeTruthy();
  });
});
