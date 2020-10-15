import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheproduitComponent } from './ficheproduit.component';

describe('FicheproduitComponent', () => {
  let component: FicheproduitComponent;
  let fixture: ComponentFixture<FicheproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
