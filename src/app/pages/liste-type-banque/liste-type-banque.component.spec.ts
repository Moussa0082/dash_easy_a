import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTypeBanqueComponent } from './liste-type-banque.component';

describe('ListeTypeBanqueComponent', () => {
  let component: ListeTypeBanqueComponent;
  let fixture: ComponentFixture<ListeTypeBanqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeTypeBanqueComponent]
    });
    fixture = TestBed.createComponent(ListeTypeBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
