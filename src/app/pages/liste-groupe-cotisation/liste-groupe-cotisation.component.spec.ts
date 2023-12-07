import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGroupeCotisationComponent } from './liste-groupe-cotisation.component';

describe('ListeGroupeCotisationComponent', () => {
  let component: ListeGroupeCotisationComponent;
  let fixture: ComponentFixture<ListeGroupeCotisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeGroupeCotisationComponent]
    });
    fixture = TestBed.createComponent(ListeGroupeCotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
