import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypeBanqueComponent } from './ajouter-type-banque.component';

describe('AjouterTypeBanqueComponent', () => {
  let component: AjouterTypeBanqueComponent;
  let fixture: ComponentFixture<AjouterTypeBanqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterTypeBanqueComponent]
    });
    fixture = TestBed.createComponent(AjouterTypeBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
