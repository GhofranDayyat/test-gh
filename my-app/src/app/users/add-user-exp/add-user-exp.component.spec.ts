import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserExpComponent } from './add-user-exp.component';

describe('AddUserExpComponent', () => {
  let component: AddUserExpComponent;
  let fixture: ComponentFixture<AddUserExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
