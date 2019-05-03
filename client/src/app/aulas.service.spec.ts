import { TestBed } from '@angular/core/testing';

import { AulasService } from './aulas.service';

describe('AulasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AulasService = TestBed.get(AulasService);
    expect(service).toBeTruthy();
  });
});
