import { TestBed } from '@angular/core/testing';

import { AvisoService } from './aviso.service';

describe('AvisoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvisoService = TestBed.get(AvisoService);
    expect(service).toBeTruthy();
  });
});
