import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteAdminComponent } from './ajoute-admin.component';

describe('AjouteAdminComponent', () => {
  let component: AjouteAdminComponent;
  let fixture: ComponentFixture<AjouteAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteAdminComponent]
    });
    fixture = TestBed.createComponent(AjouteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
