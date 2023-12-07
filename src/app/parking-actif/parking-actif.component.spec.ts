import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingActifComponent } from './parking-actif.component';

describe('ParkingActifComponent', () => {
  let component: ParkingActifComponent;
  let fixture: ComponentFixture<ParkingActifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingActifComponent]
    });
    fixture = TestBed.createComponent(ParkingActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
