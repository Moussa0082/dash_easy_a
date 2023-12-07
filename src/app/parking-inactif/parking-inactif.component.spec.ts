import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingInactifComponent } from './parking-inactif.component';

describe('ParkingInactifComponent', () => {
  let component: ParkingInactifComponent;
  let fixture: ComponentFixture<ParkingInactifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingInactifComponent]
    });
    fixture = TestBed.createComponent(ParkingInactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
