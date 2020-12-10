import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionForfaitFOrmComponent } from './gestion-forfait-form.component';

describe('GestionForfaitFOrmComponent', () => {
  let component: GestionForfaitFOrmComponent;
  let fixture: ComponentFixture<GestionForfaitFOrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionForfaitFOrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionForfaitFOrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
