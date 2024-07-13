import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { RecommendedProductsService } from '@ecommerce/product-data-access';
import { of } from 'rxjs';
import { Product } from 'modules/data-access/product/src/lib/model/product.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const mockProducts: Product[] = [
    {
      createdAt: "2023-10-10T03:25:53.791Z",
      name: "Oriental Cotton Chicken",
      price: "536.00",
      description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      image: "https://loremflickr.com/640/480/nature",
      id: "1",
      quantity: 1
    },
    {
      createdAt: "2023-10-09T20:45:06.372Z",
      name: "Recycled Cotton Shoes",
      price: "927.00",
      description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      image: "https://loremflickr.com/640/480/fashion",
      id: "2",
      quantity: 1
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, MatCardModule],
      providers: [
        {
          provide: RecommendedProductsService,
          useValue: { getProducts: () => of(mockProducts) }
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product cards correctly', () => {
    const cards: HTMLElement[] = fixture.nativeElement.querySelectorAll('mat-card');
    expect(cards.length).toBe(mockProducts.length);
  });
});
