import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDataAccessComponent } from './product-data-access.component';

describe('ProductDataAccessComponent', () => {
  let component: ProductDataAccessComponent;
  let fixture: ComponentFixture<ProductDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
