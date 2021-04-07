import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormifyComponent } from './formify.component';

describe('FormifyComponent', () => {
  let component: FormifyComponent;
  let fixture: ComponentFixture<FormifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
