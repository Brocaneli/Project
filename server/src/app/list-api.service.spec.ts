import { TestBed } from '@angular/core/testing';

import { ListApiService } from './list-api.service';

describe('ListApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListApiService = TestBed.get(ListApiService);
    expect(service).toBeTruthy();
  });
});
