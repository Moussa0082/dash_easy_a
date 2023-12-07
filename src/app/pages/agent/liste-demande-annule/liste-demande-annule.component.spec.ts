import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeAnnuleComponent } from './liste-demande-annule.component';

describe('ListeDemandeAnnuleComponent', () => {
  let component: ListeDemandeAnnuleComponent;
  let fixture: ComponentFixture<ListeDemandeAnnuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDemandeAnnuleComponent]
    });
    fixture = TestBed.createComponent(ListeDemandeAnnuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
