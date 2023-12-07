import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceFormulaireComponent } from './maintenance-formulaire.component';

describe('MaintenanceFormulaireComponent', () => {
  let component: MaintenanceFormulaireComponent;
  let fixture: ComponentFixture<MaintenanceFormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenanceFormulaireComponent]
    });
    fixture = TestBed.createComponent(MaintenanceFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
