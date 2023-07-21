import { TestBed } from '@angular/core/testing';

import { CarsListService } from './cars-list.service';

describe('CarsListServiceService', () => {
  let service: CarsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
