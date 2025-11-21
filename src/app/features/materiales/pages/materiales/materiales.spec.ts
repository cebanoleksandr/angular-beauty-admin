import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materiales } from './materiales';

describe('Materiales', () => {
  let component: Materiales;
  let fixture: ComponentFixture<Materiales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Materiales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Materiales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
