import { TestBed } from '@angular/core/testing';

import { MatriculasService } from './matriculas.service';

describe('MatriculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatriculasService = TestBed.get(MatriculasService);
    expect(service).toBeTruthy();
  });
});
