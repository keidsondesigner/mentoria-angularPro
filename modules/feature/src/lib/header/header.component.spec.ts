import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.title = 'Ecommerce';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    const header: HTMLHeadElement = fixture.nativeElement.querySelector('header');
    expect(header.textContent).toContain('Ecommerce');

    component.title = 'Outro título';
    fixture.detectChanges();
    expect(header.textContent).toContain('Outro título');
  });

  it('should redirect to "/" when logo is is clicked', () => {
    const tagA: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(tagA.getAttribute('href')).toBe('/');
  });
});
