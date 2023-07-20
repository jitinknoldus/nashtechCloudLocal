import { TestBed } from '@angular/core/testing';

import { CarsListServiceService } from './cars-list-service.service';

describe('CarsListServiceService', () => {
  let service: CarsListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
