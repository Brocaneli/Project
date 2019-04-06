import { TestBed } from '@angular/core/testing';

import { ListDetailsApiService } from './list-details-api.service';

describe('ListDetailsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListDetailsApiService = TestBed.get(ListDetailsApiService);
    expect(service).toBeTruthy();
  });
});
