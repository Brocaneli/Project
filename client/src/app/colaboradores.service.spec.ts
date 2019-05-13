import { TestBed } from '@angular/core/testing';

import { ColaboradoresService } from './colaboradores.service';

describe('ColaboradoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColaboradoresService = TestBed.get(ColaboradoresService);
    expect(service).toBeTruthy();
  });
});
