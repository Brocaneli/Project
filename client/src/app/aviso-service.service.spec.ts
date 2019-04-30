import { TestBed } from '@angular/core/testing';

import { AvisoServiceService } from './aviso-service.service';

describe('AvisoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvisoServiceService = TestBed.get(AvisoServiceService);
    expect(service).toBeTruthy();
  });
});
