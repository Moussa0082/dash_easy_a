import { TestBed } from '@angular/core/testing';

import { VenteServiceService } from './vente-service.service';

describe('VenteServiceService', () => {
  let service: VenteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
