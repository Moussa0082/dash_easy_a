import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFormulaireComponent } from './location-formulaire.component';

describe('LocationFormulaireComponent', () => {
  let component: LocationFormulaireComponent;
  let fixture: ComponentFixture<LocationFormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationFormulaireComponent]
    });
    fixture = TestBed.createComponent(LocationFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
