import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavformComponent } from './sidenavform.component';

describe('SidenavformComponent', () => {
  let component: SidenavformComponent;
  let fixture: ComponentFixture<SidenavformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
