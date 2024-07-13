import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RecommendedProductsService } from './recommended-products.service';
import { Product } from '../../model/product.model';

describe('RecommendedProductsService', () => {
  let service: RecommendedProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RecommendedProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return recommended products correctly', () => {
    // ARRANGE
    const mockProducts: Product[] = [
      {
        "createdAt": "2023-10-10T03:25:53.791Z",
        "name": "Oriental Cotton Chicken",
        "price": "536.00",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "image": "https://loremflickr.com/640/480/nature",
        "id": "1",
        "quantity": 1
      },
      {
        "createdAt": "2023-10-09T20:45:06.372Z",
        "name": "Recycled Cotton Shoes",
        "price": "927.00",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "image": "https://loremflickr.com/640/480/fashion",
        "id": "2",
        "quantity": 1
      },
    ];

    const url = `${service.baseUrl}/products?page=1&limit=6`;
    let result: Product[] = [];

    // ACT
    service.getProducts().subscribe((products) => (result = products));

    // ASSERT
    const req = httpMock.expectOne(url);
    req.flush(mockProducts);

    expect(req.request.method).toBe('GET');
    expect(result).toEqual(mockProducts);
  });
});
