import { TestBed } from '@angular/core/testing';

import { CiclosService } from './ciclos.service';

describe('CiclosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CiclosService = TestBed.get(CiclosService);
    expect(service).toBeTruthy();
  });
});
