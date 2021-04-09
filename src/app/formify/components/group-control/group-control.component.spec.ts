import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupControlComponent } from './group-control.component';

describe('GroupControlComponent', () => {
  let component: GroupControlComponent;
  let fixture: ComponentFixture<GroupControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
