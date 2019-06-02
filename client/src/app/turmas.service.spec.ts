import { TestBed } from '@angular/core/testing';

import { TurmasService } from './turmas.service';

describe('TurmasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurmasService = TestBed.get(TurmasService);
    expect(service).toBeTruthy();
  });
});
