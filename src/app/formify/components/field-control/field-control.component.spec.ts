import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldControlComponent } from './field-control.component';

describe('ControlComponent', () => {
  let component: FieldControlComponent;
  let fixture: ComponentFixture<FieldControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
