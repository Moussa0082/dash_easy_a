import { TestBed } from '@angular/core/testing';

import { AdminParkingServiceService } from './admin-parking-service.service';

describe('AdminParkingServiceService', () => {
  let service: AdminParkingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminParkingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
