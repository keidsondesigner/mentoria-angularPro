import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ProductSearchComponent } from './product-search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductSearchService } from '@ecommerce/product-data-access';
import { Product } from 'modules/data-access/product/src/lib/model/product.model';
import { of } from 'rxjs';

describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;
  let productSearchService: ProductSearchService;
  
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
      imports: [ProductSearchComponent, NoopAnimationsModule],
      providers: [
        {
          provide: ProductSearchService, // INVERSÃO DE DEPENDÊNCIA, QUANDO O COMPONENT OLHAR O SERVICE
          useValue: { searchByTerm: () => of(mockProducts) }, // SUBSTITUI OS MÉTODOS (INVERTI) DO SERVICE
        }
      ],
    }).compileComponents();

    productSearchService = TestBed.inject(ProductSearchService);
    fixture = TestBed.createComponent(ProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce when input field is changed', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByTerm');
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    input.value = 'cotton'; // preenche o campo de busca
    input.dispatchEvent(new Event('input')); // simula que o usuário dispara um evento de input

    tick(1000);
    expect(productSearchService.searchByTerm).toHaveBeenCalledWith(input.value);
  }))
});
