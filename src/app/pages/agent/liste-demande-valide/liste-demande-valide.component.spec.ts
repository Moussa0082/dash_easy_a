import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeValideComponent } from './liste-demande-valide.component';

describe('ListeDemandeValideComponent', () => {
  let component: ListeDemandeValideComponent;
  let fixture: ComponentFixture<ListeDemandeValideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDemandeValideComponent]
    });
    fixture = TestBed.createComponent(ListeDemandeValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
