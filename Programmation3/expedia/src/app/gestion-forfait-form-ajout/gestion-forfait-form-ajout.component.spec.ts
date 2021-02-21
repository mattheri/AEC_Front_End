import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionForfaitFormAjoutComponent } from './gestion-forfait-form-ajout.component';

describe('GestionForfaitFormAjoutComponent', () => {
  let component: GestionForfaitFormAjoutComponent;
  let fixture: ComponentFixture<GestionForfaitFormAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionForfaitFormAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionForfaitFormAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
