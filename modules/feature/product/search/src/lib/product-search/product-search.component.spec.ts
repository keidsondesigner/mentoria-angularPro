import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ProductSearchComponent } from './product-search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductSearchService } from '@ecommerce/product-data-access';
import { Product } from 'modules/data-access/product/src/lib/model/product.model';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
      imports: [ ProductSearchComponent, ReactiveFormsModule, NoopAnimationsModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ term: 'cotton' }) },
        },
        {
          provide: ProductSearchService, // INVERSÃO DE DEPENDÊNCIA, QUANDO O COMPONENT OLHAR O SERVICE
          useValue: { searchByTerm: jest.fn(() => of(mockProducts)) }, // SUBSTITUI OS MÉTODOS (INVERTI) DO SERVICE
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
    const searchSpy = jest.spyOn(productSearchService, 'searchByTerm'); // ouvindo o método de busca
    
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input'); // seleciona o campo de busca
    input.value = 'cotton'; // preenche o campo de busca

    // Atualizar o valor do controle de formulário
    component.searchControl.setValue(input.value);
    fixture.detectChanges();
  
    // disparar um evento de input
    const inputEvent = new Event('input', { bubbles: true });
    input.dispatchEvent(inputEvent);
    fixture.detectChanges();

    tick(20000);
    fixture.detectChanges();

    expect(searchSpy).toHaveBeenCalledWith('cotton');
  }))
});
