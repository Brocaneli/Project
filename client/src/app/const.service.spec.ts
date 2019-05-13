import { TestBed } from '@angular/core/testing';

import { ConstService } from './const.service';

describe('ConstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstService = TestBed.get(ConstService);
    expect(service).toBeTruthy();
  });
});
