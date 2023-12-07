import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteFormulaireComponent } from './vente-formulaire.component';

describe('VenteFormulaireComponent', () => {
  let component: VenteFormulaireComponent;
  let fixture: ComponentFixture<VenteFormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenteFormulaireComponent]
    });
    fixture = TestBed.createComponent(VenteFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
