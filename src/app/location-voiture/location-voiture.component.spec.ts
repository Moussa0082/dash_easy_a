import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoitureComponent } from './location-voiture.component';

describe('LocationVoitureComponent', () => {
  let component: LocationVoitureComponent;
  let fixture: ComponentFixture<LocationVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationVoitureComponent]
    });
    fixture = TestBed.createComponent(LocationVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
