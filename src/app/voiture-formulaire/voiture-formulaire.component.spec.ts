import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureFormulaireComponent } from './voiture-formulaire.component';

describe('VoitureFormulaireComponent', () => {
  let component: VoitureFormulaireComponent;
  let fixture: ComponentFixture<VoitureFormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoitureFormulaireComponent]
    });
    fixture = TestBed.createComponent(VoitureFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
