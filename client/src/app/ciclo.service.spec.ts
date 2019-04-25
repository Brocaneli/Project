import { TestBed } from '@angular/core/testing';

import { CicloService } from './ciclo.service';

describe('CicloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CicloService = TestBed.get(CicloService);
    expect(service).toBeTruthy();
  });
});
