import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeRecuComponent } from './liste-demande-recu.component';

describe('ListeDemandeRecuComponent', () => {
  let component: ListeDemandeRecuComponent;
  let fixture: ComponentFixture<ListeDemandeRecuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDemandeRecuComponent]
    });
    fixture = TestBed.createComponent(ListeDemandeRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
