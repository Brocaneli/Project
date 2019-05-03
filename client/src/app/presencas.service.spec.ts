import { TestBed } from '@angular/core/testing';

import { PresencasService } from './presencas.service';

describe('PresencasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresencasService = TestBed.get(PresencasService);
    expect(service).toBeTruthy();
  });
});
