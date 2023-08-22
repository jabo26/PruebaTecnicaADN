import { TestBed } from '@angular/core/testing';

import { TiposAsesorService } from './tipos-asesor.service';

describe('TiposAsesorService', () => {
  let service: TiposAsesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposAsesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
