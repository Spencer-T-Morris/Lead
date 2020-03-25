import { TestBed } from '@angular/core/testing';

import { CityDataService } from './city-data.service';

describe('CityDataService', () => {
  let service: CityDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
