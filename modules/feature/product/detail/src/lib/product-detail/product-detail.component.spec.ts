import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ProductSearchService } from '@ecommerce/product-data-access';
import { Product } from 'modules/data-access/product/src/lib/model/product.model';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  const mockProduct: Product = {
    createdAt: "2023-10-10T03:25:53.791Z",
    name: "Orientalotton Chicken",
    price: "536.00",
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image: "https://loremflickr.com/640/480/nature",
    id: "1",
    quantity: 1
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailComponent, RouterTestingModule],
      providers: [
        {
          provide: ProductSearchService,
          useValue: {
            getById: () => of(mockProduct),
          },

        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }),
          },
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
